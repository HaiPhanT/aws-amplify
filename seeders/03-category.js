'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [{
        name: 'Men',
        imagePath: '/img/home/hero-slide1.png',
        summary: "Men item"
      },
      {
        name: 'Women',
        imagePath: '/img/home/hero-slide3.png',
        summary: "Women item"
      },
      {
        name: 'Accessories',
        imagePath: '/img/home/hero-slide2.png',
        summary: "Accessories item"
      },
      {
        name: 'Footwear',
        imagePath: '/img/home/hero-slide1.png',
        summary: "Footwear item"
      },
      {
        name: 'Bay item',
        imagePath: '/img/home/hero-slide2.png',
        summary: "Bay item"
      },
      {
        name: 'Electronics',
        imagePath: '/img/home/hero-slide3.png',
        summary: "Electronics item"
      },
      {
        name: 'Food',
        imagePath: '/img/home/hero-slide2.png',
        summary: "Food item"
      },
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
      return item;
    })
    await queryInterface.bulkInsert('Categories', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};