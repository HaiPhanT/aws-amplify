/*jshint esversion: 6*/

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const cart = req.session.cart;
  res.locals.cart = cart.getCart();
  res.render("cart");
});

router.post("/", (req, res, next) => {
  const productId = req.body.id;
  const quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
  const productController = require("../controllers/productController");
  productController
    .getById(productId)
    .then(product => {
      const cartItem = req.session.cart.add(product, productId, quantity);
      res.json(cartItem);
    })
    .catch(err => next(err));
});

router.put("/", (req, res) => {
  const productId = req.body.id;
  const quantity = parseInt(req.body.quantity);
  const cartItem = req.session.cart.update(productId, quantity);
  res.json(cartItem);
});

router.delete("/", (req, res) => {
  const productId = req.body.id;
  req.session.cart.remove(productId);
  res.json({
    totalQuantity: req.session.cart.totalQuantity,
    totalPrice: req.session.cart.totalPrice
  });
});

router.delete("/all", (req, res) => {
  req.session.cart.empty();
  res.sendStatus(204);
  res.end();
});

module.exports = router;