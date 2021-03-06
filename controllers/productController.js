/*jshint esversion: 6*/

const controller = {};
const models = require("../models");
const Product = models.Product;
const sequelize = require("sequelize");
const Op = sequelize.Op;

controller.getTrendingProduct = () => {
  return new Promise((resolve, reject) => {
    Product.findAll({
      order: [["overallReview", "DESC"]],
      limit: 8,
      include: [
        {
          model: models.Category,
        },
      ],
      attributes: ["id", "name", "imagePath", "price"],
    })
      .then((data) => resolve(data))
      .catch((err) => reject(new Error(err)));
  });
};

controller.getAll = (query) => {
  return new Promise((resolve, reject) => {
    const options = {
      include: [
        {
          model: models.Category,
        },
      ],
      attributes: ["id", "name", "imagePath", "price", "categoryId"],
      where: {
        price: {
          [Op.gte]: query.min,
          [Op.lte]: query.max,
        },
      },
      limit: query.limit,
      offset: query.limit * (query.page - 1),
    };

    if (query.category > 0) {
      options.where.categoryId = query.category;
    }

    if (query.brand > 0) {
      options.where.brandId = query.brand;
    }

    if (query.color > 0) {
      options.include.push({
        model: models.ProductColor,
        attributes: [],
        where: {
          colorId: query.color,
        },
      });
    }

    if (query.search) {
      options.where.name = {
        [Op.iLike]: `%${query.search}%`,
      };
    }

    switch (query.sort) {
      case "name":
        options.order = [["name", "ASC"]];
        break;

      case "price":
        options.order = [["price", "ASC"]];
        break;

      case "overallReview":
        options.order = [["overallReview", "DESC"]];
        break;

      default:
        options.order = [["name", "ASC"]];
        break;
    }

    Product.findAndCountAll(options)
      .then((data) => resolve(data))
      .catch((err) => reject(new Error(err)));
  });
};

controller.getById = (id) => {
  return new Promise((resolve, reject) => {
    let product;
    Product.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: models.Category,
        },
      ],
    })
      .then((result) => {
        product = result;
        return models.ProductSpecification.findAll({
          where: {
            productId: id,
          },
          include: [
            {
              model: models.Specification,
            },
          ],
        });
      })
      .then((ProductSpecification) => {
        product.ProductSpecification = ProductSpecification;
        return models.Comment.findAll({
          where: {
            productId: id,
            parentCommentId: null,
          },
          include: [
            {
              model: models.User,
            },
            {
              model: models.Comment,
              as: "subComments",
              include: [
                {
                  model: models.User,
                },
              ],
            },
          ],
        });
      })
      .then((comments) => {
        product.Comments = comments;
        return models.Review.findAll({
          where: {
            productId: id,
          },
          include: [
            {
              model: models.User,
            },
          ],
        });
      })
      .then((Reviews) => {
        product.Reviews = Reviews;
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          const j = i;
          stars.push(Reviews.filter((review) => review.rating == j).length);
        }
        product.stars = stars;
        resolve(product);
      })
      .catch((error) => reject(new Error(error)));
  });
};

module.exports = controller;
