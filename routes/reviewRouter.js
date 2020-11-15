/*jshint esversion: 6*/

const { query } = require("express");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.isLoggedIn, (req, res, next) => {

  const controller = require("../controllers/reviewController");
  const review = {
    userId: req.session.user.id,
    productId: req.body.productId,
    rating: req.body.rating,
    message: req.body.message,
  };

  controller
    .add(review)
    .then(() => {
      res.redirect("/products/" + review.productId);
    })
    .catch(error => next(error));

});

module.exports = router;
