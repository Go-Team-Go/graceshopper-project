const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
  userId: {
    type: Sequelize.INTEGER,
  },
  productId: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 1000,
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
