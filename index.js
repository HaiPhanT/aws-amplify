"use strict";
/*jshint esversion: 6*/

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

const expressHbs = require("express-handlebars");
const helper = require("./controllers/helper");
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
  }
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use("/", require("./routes/indexRouter"));
app.use("/products", require("./routes/productRouter"));

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