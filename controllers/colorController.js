/*jshint esversion: 6*/

const controller = {};
const models = require("../models");
const Color = models.Color;
const sequelize = require("sequelize");
const Op = sequelize.Op;

controller.getAll = (query) => {
  return new Promise((resolve, reject) => {
    const options = {
      attributes: ["id", "name", "imagePath", "code"],
      include: [
        {
          model: models.ProductColor,
          include: [
            {
              model: models.Product,
              attributes: [],
              where: {
                price: {
                  [Op.gte]: query.min,
                  [Op.lte]: query.max,
                },
              },
            },
          ],
        },
      ],
    };

    if (query.category > 0) {
      options.include[0].include[0].where.categoryId = query.category;
    }

    if (query.brand > 0) {
      options.include[0].include[0].where.brandId = query.brand;
    }

    if (query.search != "") {
      options.include[0].include[0].where.name = {
        [Op.iLike]: `%${query.search}%`,
      };
    }

    Color.findAll(options)
      .then((data) => resolve(data))
      .catch((err) => reject(new Error(err)));
  });
};

module.exports = controller;
