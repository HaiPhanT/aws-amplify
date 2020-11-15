/*jshint esversion: 6*/

const controller = {};
const models = require("../models");
const Review = models.Review;
const sequelize = require("sequelize");
const Op = sequelize.Op;

controller.add = (review) => {
  return new Promise((resolve, reject) => {
    Review
      .findOne({
        where: {
          userId: review.userId,
          productId: review.productId
        }
      })
      .then((data)=>{
        if(data){
          return Review.update(review, {
            where: {
              userId: review.userId,
              productId: review.productId
            }
          });
        }
        else {
          Review.create(review);
        }
      })
      .then(() => {
        models.Product
          .findOne({
            where: {id: review.productId,},
            include: { model: models.Review }
          })
          .then(product => {
            let overallReview = 0;
            for (let i=0; i < product.Review.length; i++){
              overallReview += product.Reviews[i].rating;
            }
            overallReview = overallReview / product.reviewCount;
            return models.Product.update({
              overallReview: overallReview,
              reviewCount: product.Review.length,
            }, {
              where: { id: product.id }
            });
          });
      })
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  });
};

controller.getUserReviewProduct = (userId, productId) => {
  return Review.findOne({
    where: {
      userId,
      productId
    }
  });
};

module.exports = controller;
