const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
  },
  //what can we add here for order history
});

module.exports = Cart;
