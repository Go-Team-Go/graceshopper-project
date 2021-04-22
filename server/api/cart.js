const router = require('express').Router();
const {
  models: { Cart, Product, User },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const cart = await User.findByPk(user.id, {
      include: { model: Product },
    });
    res.send(cart.products);
  } catch (err) {
    next(err);
  }
});

//POST /api/cart/

router.post('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const { quantity, productId } = req.body;
    const item = await Cart.create({ userId: user.id, quantity, productId });
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
    const updatedItem = await item.update({ quantity });
    console.log(updatedItem);
    res.send(item);
  } catch (err) {
    next(err);
  }
});
