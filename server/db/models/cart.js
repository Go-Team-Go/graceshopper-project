const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
  },
  purchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  purchasedDate: {
    type: Sequelize.DATEONLY,
  },
});

module.exports = Cart;
