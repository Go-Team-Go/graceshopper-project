const router = require('express').Router();
const {
  models: { Cart, Product, User },
} = require('../db');
module.exports = router;

//POST /api/cart/:userId

router.post('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { cartQuantity, productId } = req.body;
    const item = await Cart.create({ userId, cartQuantity, productId });
    res.send(item);
  } catch (err) {
    next(err);
  }
});
