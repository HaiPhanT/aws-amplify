const controller = {};
const models = require("../models");
const Category = models.Category;

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Category
            .findAll({
                attributes: ['id', 'name', 'imagePath', 'summary']
            })
            .then(data => resolve(data))
            .catch(err => reject(new Error(err)));
    });
};

module.exports = controller;