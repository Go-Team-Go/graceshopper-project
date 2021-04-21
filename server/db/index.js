//this is the access point for all things database related!
const Sequelize = require('sequelize');
const db = require('./db');
const User = require('./models/user');
const Product = require('./models/product');
const Cart = require('./models/cart');

//associations could go here!
Product.belongsToMany(User, { through: Cart });
User.belongsToMany(Product, { through: Cart });

module.exports = {
  db,
  models: {
    User,
    Product,
    Cart,
  },
};
