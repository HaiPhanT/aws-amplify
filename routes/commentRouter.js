/*jshint esversion: 6*/

const { query } = require("express");
const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {

  const controller = require("../controllers/commentController");
  const comment = {
    userId: 1,
    productId: req.body.productId,
    message: req.body.message,
  };

  if (!isNaN(req.body.parentCommentId) && (req.body.parentCommentId != "")){
    comment.parentCommentId = req.body.parentCommentId;
  }

  controller
    .add(comment)
    .then(data => {
      res.redirect("/products/" + data.productId);
    })
    .catch(error => next(error));

});

module.exports = router;
