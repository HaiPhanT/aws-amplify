/*jshint esversion: 6*/
"use strict";

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

const expressHbs = require("express-handlebars");
const helper = require("./controllers/helper");
const paginateHelper = require("express-handlebars-paginate");

const hbs = expressHbs.create({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
  },
  extname: "hbs",
  defaultLayout: "layout",
  layoutsDir: __dirname + "/views/layouts/",
  partialsDir: __dirname + "/views/partials/",
  helpers: {
    createStarList: helper.createStarList,
    createStars: helper.createStars,
    createPagination: paginateHelper.createPagination,
  },
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const session = require("express-session");
app.use(
  session({
    cookie: {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000
    },
    secret: "thisismysecret",
    resave: false,
    saveUninitialized: false,
  })
);

const Cart = require("./controllers/cartController");
app.use((req, res, next) => {
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  req.session.cart = cart;
  res.locals.totalQuantity = cart.totalQuantity;
  next();
});

app.use("/", require("./routes/indexRouter"));
app.use("/products", require("./routes/productRouter"));
app.use("/cart", require("./routes/cartRouter"));
app.use("/comments", require("./routes/commentRouter"));

app.get("/sync", (req, res) => {
  let models = require("./models");
  models.sequelize.sync().then(() => res.send("Database sync completed!"));
});

app.get("/:page", (req, res) => {
  let banner = {
    blog: "Our Blog",
    "single-blog": "Blog Details",
    cart: "Shopping Cart",
    category: "Shop Category",
    checkout: "Product Checkout",
    confirmation: "Order Confirmation",
    contact: "Contact Us",
    login: "Login / Register",
    register: "Register",
    "single-product": "Shop Single",
    "tracking-order": "Order Tracking",
  };
  let page = req.params.page;
  res.render(page, {
    banner: banner[page],
  });
});

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => {
  console.log(`Server is running at port ${app.get("port")}`);
});