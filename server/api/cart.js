const router = require('express').Router();
const {
  models: { Cart, Product, User },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    // const cart = await User.findByPk(user.id, {
    //   include: { model: Product },
    // });
    // res.send(cart.products);
    const items = await Cart.findAll({
      where: { userId: user.id },
    });

    res.send(items);
  } catch (err) {
    next(err);
  }
});

//POST /api/cart/

router.post('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const { quantity, productId, name, price } = req.body;
    const item = await Cart.create({
      userId: user.id,
      quantity,
      productId,
      name,
      price,
    });
    res.send(item);
  } catch (err) {
    next(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const { quantity, productId } = req.body;
    const item = await Cart.findOne({
      where: { userId: user.id, productId },
    });
    const newQuantity = item.quantity + quantity;
    const updatedItem = await item.update({ quantity: newQuantity });
    res.send(updatedItem);
  } catch (err) {
    next(err);
  }
});
