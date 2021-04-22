const router = require('express').Router();
const {
  models: { Cart, Product, User },
} = require('../db');
module.exports = router;

//POST /api/cart/

router.get('/', (req, res, next) => {
  try {
    res.send('hello');
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    console.log(req.body);
    const { quantity, productId } = req.body;
    const item = await Cart.create({ userId: user.id, quantity, productId });
    res.send(item);
  } catch (err) {
    next(err);
  }
});
