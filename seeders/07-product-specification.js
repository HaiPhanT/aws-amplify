'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [{
        "productId": 1,
        "specificationId": 1,
        "description": "duis ac nibh"
      },
      {
        "productId": 1,
        "specificationId": 2,
        "description": "non sodales"
      },
      {
        "productId": 1,
        "specificationId": 3,
        "description": "quam"
      },
      {
        "productId": 1,
        "specificationId": 4,
        "description": "mauris"
      },
      {
        "productId": 1,
        "specificationId": 5,
        "description": "sapien urna pretium"
      },
      {
        "productId": 1,
        "specificationId": 6,
        "description": "diam neque"
      },
      {
        "productId": 1,
        "specificationId": 7,
        "description": "eleifend"
      },
      {
        "productId": 1,
        "specificationId": 8,
        "description": "semper"
      },
      {
        "productId": 2,
        "specificationId": 1,
        "description": "tristique in"
      },
      {
        "productId": 2,
        "specificationId": 2,
        "description": "duis"
      },
      {
        "productId": 2,
        "specificationId": 3,
        "description": "at lorem"
      },
      {
        "productId": 2,
        "specificationId": 4,
        "description": "amet eros"
      },
      {
        "productId": 2,
        "specificationId": 5,
        "description": "ligula"
      },
      {
        "productId": 2,
        "specificationId": 6,
        "description": "nunc"
      },
      {
        "productId": 2,
        "specificationId": 7,
        "description": "orci eget orci"
      },
      {
        "productId": 2,
        "specificationId": 8,
        "description": "sit amet nunc"
      },
      {
        "productId": 3,
        "specificationId": 1,
        "description": "quam sapien"
      },
      {
        "productId": 3,
        "specificationId": 2,
        "description": "eget nunc"
      },
      {
        "productId": 3,
        "specificationId": 3,
        "description": "dictumst"
      },
      {
        "productId": 3,
        "specificationId": 4,
        "description": "quis"
      },
      {
        "productId": 3,
        "specificationId": 5,
        "description": "magna ac consequat"
      },
      {
        "productId": 3,
        "specificationId": 6,
        "description": "lacus"
      },
      {
        "productId": 3,
        "specificationId": 7,
        "description": "malesuada in"
      },
      {
        "productId": 3,
        "specificationId": 8,
        "description": "lectus pellentesque at"
      },
      {
        "productId": 4,
        "specificationId": 1,
        "description": "elit ac"
      },
      {
        "productId": 4,
        "specificationId": 2,
        "description": "nisi at nibh"
      },
      {
        "productId": 4,
        "specificationId": 3,
        "description": "lorem ipsum"
      },
      {
        "productId": 4,
        "specificationId": 4,
        "description": "est"
      },
      {
        "productId": 4,
        "specificationId": 5,
        "description": "justo pellentesque"
      },
      {
        "productId": 4,
        "specificationId": 6,
        "description": "volutpat eleifend donec"
      },
      {
        "productId": 4,
        "specificationId": 7,
        "description": "nonummy maecenas tincidunt"
      },
      {
        "productId": 4,
        "specificationId": 8,
        "description": "in eleifend quam"
      },
      {
        "productId": 5,
        "specificationId": 1,
        "description": "vestibulum ac est"
      },
      {
        "productId": 5,
        "specificationId": 2,
        "description": "quis lectus"
      },
      {
        "productId": 5,
        "specificationId": 3,
        "description": "congue vivamus"
      },
      {
        "productId": 5,
        "specificationId": 4,
        "description": "justo"
      },
      {
        "productId": 5,
        "specificationId": 5,
        "description": "pede malesuada"
      },
      {
        "productId": 5,
        "specificationId": 6,
        "description": "ut erat id"
      },
      {
        "productId": 5,
        "specificationId": 7,
        "description": "lorem integer tincidunt"
      },
      {
        "productId": 5,
        "specificationId": 8,
        "description": "donec"
      },
      {
        "productId": 6,
        "specificationId": 1,
        "description": "non sodales sed"
      },
      {
        "productId": 6,
        "specificationId": 2,
        "description": "est quam pharetra"
      },
      {
        "productId": 6,
        "specificationId": 3,
        "description": "blandit"
      },
      {
        "productId": 6,
        "specificationId": 4,
        "description": "quam nec dui"
      },
      {
        "productId": 6,
        "specificationId": 5,
        "description": "nisi"
      },
      {
        "productId": 6,
        "specificationId": 6,
        "description": "pede"
      },
      {
        "productId": 6,
        "specificationId": 7,
        "description": "nisl venenatis lacinia"
      },
      {
        "productId": 6,
        "specificationId": 8,
        "description": "iaculis"
      },
      {
        "productId": 7,
        "specificationId": 1,
        "description": "turpis a"
      },
      {
        "productId": 7,
        "specificationId": 2,
        "description": "orci vehicula"
      },
      {
        "productId": 7,
        "specificationId": 3,
        "description": "ipsum dolor sit"
      },
      {
        "productId": 7,
        "specificationId": 4,
        "description": "nulla sed"
      },
      {
        "productId": 7,
        "specificationId": 5,
        "description": "sed tristique in"
      },
      {
        "productId": 7,
        "specificationId": 6,
        "description": "porttitor pede"
      },
      {
        "productId": 7,
        "specificationId": 7,
        "description": "enim"
      },
      {
        "productId": 7,
        "specificationId": 8,
        "description": "suscipit nulla elit"
      },
      {
        "productId": 8,
        "specificationId": 1,
        "description": "placerat ante nulla"
      },
      {
        "productId": 8,
        "specificationId": 2,
        "description": "venenatis turpis enim"
      },
      {
        "productId": 8,
        "specificationId": 3,
        "description": "sit amet justo"
      },
      {
        "productId": 8,
        "specificationId": 4,
        "description": "est donec odio"
      },
      {
        "productId": 8,
        "specificationId": 5,
        "description": "hac"
      },
      {
        "productId": 8,
        "specificationId": 6,
        "description": "aenean auctor gravida"
      },
      {
        "productId": 8,
        "specificationId": 7,
        "description": "et"
      },
      {
        "productId": 8,
        "specificationId": 8,
        "description": "semper est quam"
      },
      {
        "productId": 9,
        "specificationId": 1,
        "description": "sed"
      },
      {
        "productId": 9,
        "specificationId": 2,
        "description": "non"
      },
      {
        "productId": 9,
        "specificationId": 3,
        "description": "ut"
      },
      {
        "productId": 9,
        "specificationId": 4,
        "description": "mattis egestas metus"
      },
      {
        "productId": 9,
        "specificationId": 5,
        "description": "ornare"
      },
      {
        "productId": 9,
        "specificationId": 6,
        "description": "vel"
      },
      {
        "productId": 9,
        "specificationId": 7,
        "description": "nulla elit"
      },
      {
        "productId": 9,
        "specificationId": 8,
        "description": "erat nulla tempus"
      },
      {
        "productId": 10,
        "specificationId": 1,
        "description": "non"
      },
      {
        "productId": 10,
        "specificationId": 2,
        "description": "nunc nisl"
      },
      {
        "productId": 10,
        "specificationId": 3,
        "description": "vulputate ut"
      },
      {
        "productId": 10,
        "specificationId": 4,
        "description": "ultrices vel"
      },
      {
        "productId": 10,
        "specificationId": 5,
        "description": "molestie nibh"
      },
      {
        "productId": 10,
        "specificationId": 6,
        "description": "ac diam"
      },
      {
        "productId": 10,
        "specificationId": 7,
        "description": "pharetra magna"
      },
      {
        "productId": 10,
        "specificationId": 8,
        "description": "accumsan"
      },
      {
        "productId": 11,
        "specificationId": 1,
        "description": "aliquam augue quam"
      },
      {
        "productId": 11,
        "specificationId": 2,
        "description": "pede posuere"
      },
      {
        "productId": 11,
        "specificationId": 3,
        "description": "nibh"
      },
      {
        "productId": 11,
        "specificationId": 4,
        "description": "feugiat non"
      },
      {
        "productId": 11,
        "specificationId": 5,
        "description": "libero ut"
      },
      {
        "productId": 11,
        "specificationId": 6,
        "description": "nisl nunc rhoncus"
      },
      {
        "productId": 11,
        "specificationId": 7,
        "description": "ultrices"
      },
      {
        "productId": 11,
        "specificationId": 8,
        "description": "eget"
      },
      {
        "productId": 12,
        "specificationId": 1,
        "description": "vivamus vestibulum"
      },
      {
        "productId": 12,
        "specificationId": 2,
        "description": "vel pede"
      },
      {
        "productId": 12,
        "specificationId": 3,
        "description": "adipiscing"
      },
      {
        "productId": 12,
        "specificationId": 4,
        "description": "diam nam"
      },
      {
        "productId": 12,
        "specificationId": 5,
        "description": "risus"
      },
      {
        "productId": 12,
        "specificationId": 6,
        "description": "amet"
      },
      {
        "productId": 12,
        "specificationId": 7,
        "description": "dictumst morbi vestibulum"
      },
      {
        "productId": 12,
        "specificationId": 8,
        "description": "adipiscing"
      },
      {
        "productId": 13,
        "specificationId": 1,
        "description": "dui nec nisi"
      },
      {
        "productId": 13,
        "specificationId": 2,
        "description": "amet sapien"
      },
      {
        "productId": 13,
        "specificationId": 3,
        "description": "luctus et ultrices"
      },
      {
        "productId": 13,
        "specificationId": 4,
        "description": "nunc"
      },
      {
        "productId": 13,
        "specificationId": 5,
        "description": "diam"
      },
      {
        "productId": 13,
        "specificationId": 6,
        "description": "sapien in"
      },
      {
        "productId": 13,
        "specificationId": 7,
        "description": "vulputate elementum nullam"
      },
      {
        "productId": 13,
        "specificationId": 8,
        "description": "maecenas rhoncus"
      },
      {
        "productId": 14,
        "specificationId": 1,
        "description": "porttitor"
      },
      {
        "productId": 14,
        "specificationId": 2,
        "description": "eget eros elementum"
      },
      {
        "productId": 14,
        "specificationId": 3,
        "description": "nulla"
      },
      {
        "productId": 14,
        "specificationId": 4,
        "description": "risus"
      },
      {
        "productId": 14,
        "specificationId": 5,
        "description": "pede"
      },
      {
        "productId": 14,
        "specificationId": 6,
        "description": "in hac"
      },
      {
        "productId": 14,
        "specificationId": 7,
        "description": "arcu libero"
      },
      {
        "productId": 14,
        "specificationId": 8,
        "description": "sed tristique"
      },
      {
        "productId": 15,
        "specificationId": 1,
        "description": "vulputate vitae nisl"
      },
      {
        "productId": 15,
        "specificationId": 2,
        "description": "ut nunc"
      },
      {
        "productId": 15,
        "specificationId": 3,
        "description": "fermentum"
      },
      {
        "productId": 15,
        "specificationId": 4,
        "description": "sem duis"
      },
      {
        "productId": 15,
        "specificationId": 5,
        "description": "enim"
      },
      {
        "productId": 15,
        "specificationId": 6,
        "description": "dolor sit amet"
      },
      {
        "productId": 15,
        "specificationId": 7,
        "description": "odio in"
      },
      {
        "productId": 15,
        "specificationId": 8,
        "description": "vel est donec"
      },
      {
        "productId": 16,
        "specificationId": 1,
        "description": "neque vestibulum"
      },
      {
        "productId": 16,
        "specificationId": 2,
        "description": "consectetuer eget"
      },
      {
        "productId": 16,
        "specificationId": 3,
        "description": "justo morbi ut"
      },
      {
        "productId": 16,
        "specificationId": 4,
        "description": "congue"
      },
      {
        "productId": 16,
        "specificationId": 5,
        "description": "maecenas ut"
      },
      {
        "productId": 16,
        "specificationId": 6,
        "description": "curae"
      },
      {
        "productId": 16,
        "specificationId": 7,
        "description": "orci pede"
      },
      {
        "productId": 16,
        "specificationId": 8,
        "description": "et"
      },
      {
        "productId": 17,
        "specificationId": 1,
        "description": "luctus et"
      },
      {
        "productId": 17,
        "specificationId": 2,
        "description": "non velit"
      },
      {
        "productId": 17,
        "specificationId": 3,
        "description": "vestibulum ante"
      },
      {
        "productId": 17,
        "specificationId": 4,
        "description": "ac"
      },
      {
        "productId": 17,
        "specificationId": 5,
        "description": "morbi vel lectus"
      },
      {
        "productId": 17,
        "specificationId": 6,
        "description": "sapien iaculis congue"
      },
      {
        "productId": 17,
        "specificationId": 7,
        "description": "nec molestie"
      },
      {
        "productId": 17,
        "specificationId": 8,
        "description": "magnis dis"
      },
      {
        "productId": 18,
        "specificationId": 1,
        "description": "donec pharetra"
      },
      {
        "productId": 18,
        "specificationId": 2,
        "description": "duis bibendum morbi"
      },
      {
        "productId": 18,
        "specificationId": 3,
        "description": "nullam sit amet"
      },
      {
        "productId": 18,
        "specificationId": 4,
        "description": "in libero"
      },
      {
        "productId": 18,
        "specificationId": 5,
        "description": "interdum venenatis"
      },
      {
        "productId": 18,
        "specificationId": 6,
        "description": "quis turpis eget"
      },
      {
        "productId": 18,
        "specificationId": 7,
        "description": "felis donec semper"
      },
      {
        "productId": 18,
        "specificationId": 8,
        "description": "id turpis integer"
      },
      {
        "productId": 19,
        "specificationId": 1,
        "description": "tincidunt"
      },
      {
        "productId": 19,
        "specificationId": 2,
        "description": "felis fusce"
      },
      {
        "productId": 19,
        "specificationId": 3,
        "description": "nisl venenatis"
      },
      {
        "productId": 19,
        "specificationId": 4,
        "description": "ante ipsum"
      },
      {
        "productId": 19,
        "specificationId": 5,
        "description": "sapien in sapien"
      },
      {
        "productId": 19,
        "specificationId": 6,
        "description": "lorem quisque"
      },
      {
        "productId": 19,
        "specificationId": 7,
        "description": "sit amet erat"
      },
      {
        "productId": 19,
        "specificationId": 8,
        "description": "eleifend"
      },
      {
        "productId": 20,
        "specificationId": 1,
        "description": "odio curabitur"
      },
      {
        "productId": 20,
        "specificationId": 2,
        "description": "odio porttitor id"
      },
      {
        "productId": 20,
        "specificationId": 3,
        "description": "lacus"
      },
      {
        "productId": 20,
        "specificationId": 4,
        "description": "id ligula"
      },
      {
        "productId": 20,
        "specificationId": 5,
        "description": "bibendum"
      },
      {
        "productId": 20,
        "specificationId": 6,
        "description": "nulla tempus"
      },
      {
        "productId": 20,
        "specificationId": 7,
        "description": "turpis enim blandit"
      },
      {
        "productId": 20,
        "specificationId": 8,
        "description": "sit amet"
      },
      {
        "productId": 21,
        "specificationId": 1,
        "description": "vestibulum"
      },
      {
        "productId": 21,
        "specificationId": 2,
        "description": "nam"
      },
      {
        "productId": 21,
        "specificationId": 3,
        "description": "metus sapien"
      },
      {
        "productId": 21,
        "specificationId": 4,
        "description": "diam"
      },
      {
        "productId": 21,
        "specificationId": 5,
        "description": "risus"
      },
      {
        "productId": 21,
        "specificationId": 6,
        "description": "tristique tortor"
      },
      {
        "productId": 21,
        "specificationId": 7,
        "description": "luctus et"
      },
      {
        "productId": 21,
        "specificationId": 8,
        "description": "amet consectetuer"
      },
      {
        "productId": 22,
        "specificationId": 1,
        "description": "pulvinar sed nisl"
      },
      {
        "productId": 22,
        "specificationId": 2,
        "description": "sociis natoque penatibus"
      },
      {
        "productId": 22,
        "specificationId": 3,
        "description": "nulla dapibus"
      },
      {
        "productId": 22,
        "specificationId": 4,
        "description": "a suscipit"
      },
      {
        "productId": 22,
        "specificationId": 5,
        "description": "vestibulum eget vulputate"
      },
      {
        "productId": 22,
        "specificationId": 6,
        "description": "volutpat"
      },
      {
        "productId": 22,
        "specificationId": 7,
        "description": "iaculis congue vivamus"
      },
      {
        "productId": 22,
        "specificationId": 8,
        "description": "nec dui luctus"
      },
      {
        "productId": 23,
        "specificationId": 1,
        "description": "parturient"
      },
      {
        "productId": 23,
        "specificationId": 2,
        "description": "eros"
      },
      {
        "productId": 23,
        "specificationId": 3,
        "description": "id mauris vulputate"
      },
      {
        "productId": 23,
        "specificationId": 4,
        "description": "congue"
      },
      {
        "productId": 23,
        "specificationId": 5,
        "description": "pulvinar"
      },
      {
        "productId": 23,
        "specificationId": 6,
        "description": "diam in magna"
      },
      {
        "productId": 23,
        "specificationId": 7,
        "description": "ultrices phasellus id"
      },
      {
        "productId": 23,
        "specificationId": 8,
        "description": "felis donec semper"
      },
      {
        "productId": 24,
        "specificationId": 1,
        "description": "parturient montes nascetur"
      },
      {
        "productId": 24,
        "specificationId": 2,
        "description": "justo in"
      },
      {
        "productId": 24,
        "specificationId": 3,
        "description": "nulla"
      },
      {
        "productId": 24,
        "specificationId": 4,
        "description": "proin leo odio"
      },
      {
        "productId": 24,
        "specificationId": 5,
        "description": "nulla nunc purus"
      },
      {
        "productId": 24,
        "specificationId": 6,
        "description": "eget"
      },
      {
        "productId": 24,
        "specificationId": 7,
        "description": "velit vivamus vel"
      },
      {
        "productId": 24,
        "specificationId": 8,
        "description": "aliquet at"
      },
      {
        "productId": 25,
        "specificationId": 1,
        "description": "arcu"
      },
      {
        "productId": 25,
        "specificationId": 2,
        "description": "nec"
      },
      {
        "productId": 25,
        "specificationId": 3,
        "description": "non mi integer"
      },
      {
        "productId": 25,
        "specificationId": 4,
        "description": "adipiscing molestie"
      },
      {
        "productId": 25,
        "specificationId": 5,
        "description": "morbi"
      },
      {
        "productId": 25,
        "specificationId": 6,
        "description": "justo sit amet"
      },
      {
        "productId": 25,
        "specificationId": 7,
        "description": "vehicula condimentum"
      },
      {
        "productId": 25,
        "specificationId": 8,
        "description": "est congue elementum"
      },
      {
        "productId": 26,
        "specificationId": 1,
        "description": "sed lacus"
      },
      {
        "productId": 26,
        "specificationId": 2,
        "description": "diam"
      },
      {
        "productId": 26,
        "specificationId": 3,
        "description": "aenean"
      },
      {
        "productId": 26,
        "specificationId": 4,
        "description": "lobortis est phasellus"
      },
      {
        "productId": 26,
        "specificationId": 5,
        "description": "nisl aenean lectus"
      },
      {
        "productId": 26,
        "specificationId": 6,
        "description": "non velit nec"
      },
      {
        "productId": 26,
        "specificationId": 7,
        "description": "erat id mauris"
      },
      {
        "productId": 26,
        "specificationId": 8,
        "description": "dictumst maecenas ut"
      },
      {
        "productId": 27,
        "specificationId": 1,
        "description": "leo odio"
      },
      {
        "productId": 27,
        "specificationId": 2,
        "description": "dolor sit amet"
      },
      {
        "productId": 27,
        "specificationId": 3,
        "description": "libero"
      },
      {
        "productId": 27,
        "specificationId": 4,
        "description": "massa volutpat convallis"
      },
      {
        "productId": 27,
        "specificationId": 5,
        "description": "orci pede"
      },
      {
        "productId": 27,
        "specificationId": 6,
        "description": "arcu libero"
      },
      {
        "productId": 27,
        "specificationId": 7,
        "description": "mattis nibh"
      },
      {
        "productId": 27,
        "specificationId": 8,
        "description": "nunc purus phasellus"
      },
      {
        "productId": 28,
        "specificationId": 1,
        "description": "imperdiet sapien urna"
      },
      {
        "productId": 28,
        "specificationId": 2,
        "description": "neque"
      },
      {
        "productId": 28,
        "specificationId": 3,
        "description": "dui"
      },
      {
        "productId": 28,
        "specificationId": 4,
        "description": "lobortis est"
      },
      {
        "productId": 28,
        "specificationId": 5,
        "description": "vel enim"
      },
      {
        "productId": 28,
        "specificationId": 6,
        "description": "feugiat non"
      },
      {
        "productId": 28,
        "specificationId": 7,
        "description": "eu orci"
      },
      {
        "productId": 28,
        "specificationId": 8,
        "description": "blandit lacinia erat"
      },
      {
        "productId": 29,
        "specificationId": 1,
        "description": "justo"
      },
      {
        "productId": 29,
        "specificationId": 2,
        "description": "ipsum"
      },
      {
        "productId": 29,
        "specificationId": 3,
        "description": "molestie sed justo"
      },
      {
        "productId": 29,
        "specificationId": 4,
        "description": "vitae"
      },
      {
        "productId": 29,
        "specificationId": 5,
        "description": "nec"
      },
      {
        "productId": 29,
        "specificationId": 6,
        "description": "sed lacus morbi"
      },
      {
        "productId": 29,
        "specificationId": 7,
        "description": "ornare consequat"
      },
      {
        "productId": 29,
        "specificationId": 8,
        "description": "varius"
      },
      {
        "productId": 30,
        "specificationId": 1,
        "description": "nec nisi"
      },
      {
        "productId": 30,
        "specificationId": 2,
        "description": "vivamus"
      },
      {
        "productId": 30,
        "specificationId": 3,
        "description": "tellus semper interdum"
      },
      {
        "productId": 30,
        "specificationId": 4,
        "description": "dapibus duis at"
      },
      {
        "productId": 30,
        "specificationId": 5,
        "description": "elementum pellentesque quisque"
      },
      {
        "productId": 30,
        "specificationId": 6,
        "description": "luctus nec"
      },
      {
        "productId": 30,
        "specificationId": 7,
        "description": "etiam"
      },
      {
        "productId": 30,
        "specificationId": 8,
        "description": "viverra pede"
      },
      {
        "productId": 31,
        "specificationId": 1,
        "description": "sed accumsan"
      },
      {
        "productId": 31,
        "specificationId": 2,
        "description": "varius ut"
      },
      {
        "productId": 31,
        "specificationId": 3,
        "description": "sodales"
      },
      {
        "productId": 31,
        "specificationId": 4,
        "description": "eros viverra"
      },
      {
        "productId": 31,
        "specificationId": 5,
        "description": "tempus vivamus"
      },
      {
        "productId": 31,
        "specificationId": 6,
        "description": "tristique fusce"
      },
      {
        "productId": 31,
        "specificationId": 7,
        "description": "amet"
      },
      {
        "productId": 31,
        "specificationId": 8,
        "description": "ullamcorper"
      },
      {
        "productId": 32,
        "specificationId": 1,
        "description": "vel"
      },
      {
        "productId": 32,
        "specificationId": 2,
        "description": "convallis tortor risus"
      },
      {
        "productId": 32,
        "specificationId": 3,
        "description": "velit vivamus vel"
      },
      {
        "productId": 32,
        "specificationId": 4,
        "description": "non"
      },
      {
        "productId": 32,
        "specificationId": 5,
        "description": "metus"
      },
      {
        "productId": 32,
        "specificationId": 6,
        "description": "sit amet"
      },
      {
        "productId": 32,
        "specificationId": 7,
        "description": "vitae nisi nam"
      },
      {
        "productId": 32,
        "specificationId": 8,
        "description": "lorem id ligula"
      },
      {
        "productId": 33,
        "specificationId": 1,
        "description": "vivamus"
      },
      {
        "productId": 33,
        "specificationId": 2,
        "description": "auctor gravida sem"
      },
      {
        "productId": 33,
        "specificationId": 3,
        "description": "at"
      },
      {
        "productId": 33,
        "specificationId": 4,
        "description": "at"
      },
      {
        "productId": 33,
        "specificationId": 5,
        "description": "aliquam quis turpis"
      },
      {
        "productId": 33,
        "specificationId": 6,
        "description": "sit amet eleifend"
      },
      {
        "productId": 33,
        "specificationId": 7,
        "description": "quam sapien"
      },
      {
        "productId": 33,
        "specificationId": 8,
        "description": "platea"
      },
      {
        "productId": 34,
        "specificationId": 1,
        "description": "quis orci"
      },
      {
        "productId": 34,
        "specificationId": 2,
        "description": "maecenas tincidunt lacus"
      },
      {
        "productId": 34,
        "specificationId": 3,
        "description": "pede morbi porttitor"
      },
      {
        "productId": 34,
        "specificationId": 4,
        "description": "lorem vitae"
      },
      {
        "productId": 34,
        "specificationId": 5,
        "description": "purus phasellus"
      },
      {
        "productId": 34,
        "specificationId": 6,
        "description": "amet diam"
      },
      {
        "productId": 34,
        "specificationId": 7,
        "description": "non lectus"
      },
      {
        "productId": 34,
        "specificationId": 8,
        "description": "donec semper sapien"
      },
      {
        "productId": 35,
        "specificationId": 1,
        "description": "ante"
      },
      {
        "productId": 35,
        "specificationId": 2,
        "description": "massa volutpat"
      },
      {
        "productId": 35,
        "specificationId": 3,
        "description": "dolor sit amet"
      },
      {
        "productId": 35,
        "specificationId": 4,
        "description": "maecenas pulvinar lobortis"
      },
      {
        "productId": 35,
        "specificationId": 5,
        "description": "aenean lectus pellentesque"
      },
      {
        "productId": 35,
        "specificationId": 6,
        "description": "quis lectus"
      },
      {
        "productId": 35,
        "specificationId": 7,
        "description": "etiam"
      },
      {
        "productId": 35,
        "specificationId": 8,
        "description": "dolor morbi"
      }
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
      return item;
    })
    await queryInterface.bulkInsert('ProductSpecifications', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductSpecifications', null, {});
  }
};