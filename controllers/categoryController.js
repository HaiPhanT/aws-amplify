/*jshint esversion: 6*/

const controller = {};
const models = require("../models");
const Category = models.Category;
const sequelize = require("sequelize");
const Op = sequelize.Op;

controller.getAll = (query) => {
  return new Promise((resolve, reject) => {
    const options = {
      attributes: ["id", "name", "imagePath", "summary"],
      include: [
        {
          model: models.Product,
          where: {},
        },
      ],
    };

    if (query && query.search != "") {
      options.include[0].where.name = {
        [Op.iLike]: `%${query.search}%`,
      };
    }

    Category.findAll(options)
      .then((data) => resolve(data))
      .catch((err) => reject(new Error(err)));
  });
};

module.exports = controller;
