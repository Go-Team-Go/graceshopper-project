//this is the access point for all things database related!

const db = require('./db')
const User = require('./models/User')
const Product = require("./models/product")

//defining cart through table
const Cart = db.define('cart', {
  cartQuantity: Sequelize.INTEGER
});


//associations could go here!
Product.belongsToMany(User, {through: Cart})
User.belongsToMany(Product, {through: Cart})






module.exports = {
  db,
  models: {
    User,
    Product,
    Cart
  },
}
