const controller = {};
const models = require("../models");
const Product = models.Product;

controller.getTrendingProduct = () => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                order: [
                    ["overallReview", "DESC"]
                ],
                limit: 8,
                include: [{
                    model: models.Category
                }],
                attributes: ['id', 'name', 'imagePath', 'price']
            })
            .then(data => resolve(data))
            .catch(err => reject(new Error(err)));
    });
};

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                include: [{
                    model: models.Category
                }],
                attributes: ['id', 'name', 'imagePath', 'price']
            })
            .then(data => resolve(data))
            .catch(err => reject(new Error(err)));
    });
};

module.exports = controller;