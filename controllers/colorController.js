const controller = {};
const models = require("../models");
const Color = models.Color;

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Color
            .findAll({
                attributes: ['id', 'name', 'imagePath', 'code'],
                include: [{
                    model: models.ProductColor
                }]
            })
            .then(data => resolve(data))
            .catch(err => reject(new Error(err)));
    });
};

module.exports = controller;