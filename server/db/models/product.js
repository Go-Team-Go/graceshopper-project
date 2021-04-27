const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://img.delicious.com.au/CKMUcpx-/w1200/del/2015/11/summer-cocktails-24374-3.jpg',
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 1000,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 10,
  },
  flavor: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;
