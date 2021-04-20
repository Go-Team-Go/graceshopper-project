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
    defaultValue: 'something here',
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 10,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 10,
  },
});

module.exports = Product;
