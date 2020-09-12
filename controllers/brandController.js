const controller = {};
const models = require("../models");
const Brand = models.Brand;

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Brand
            .findAll({
                attributes: ['id', 'name', 'imagePath'],
                include: [{
                    model: models.Product
                }]
            })
            .then(data => resolve(data))
            .catch(err => reject(new Error(err)));
    });
};

module.exports = controller;