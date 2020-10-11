/*jshint esversion: 6*/

const controller = {};
const models = require("../models");
const Brand = models.Brand;
const sequelize = require("sequelize");
const Op = sequelize.Op;

controller.getAll = (query) => {
  return new Promise((resolve, reject) => {
    const options = {
      attributes: ["id", "name", "imagePath"],
      include: [
        {
          model: models.Product,
          where: {
            price: {
              [Op.gte]: query.min,
              [Op.lte]: query.max,
            },
          },
        },
      ],
    };

    if (query.category > 0) {
      options.include[0].where.categoryId = query.category;
    }

    if (query.color > 0) {
      options.include[0].include = [
        {
          model: models.ProductColor,
          attributes: [],
          where: {
            colorId: query.color,
          },
        },
      ];
    }

    if (query.search != "") {
      options.include[0].where.name = {
        [Op.iLike]: `%${query.search}%`,
      };
    }

    Brand.findAll(options)
      .then((data) => resolve(data))
      .catch((err) => reject(new Error(err)));
  });
};

module.exports = controller;
