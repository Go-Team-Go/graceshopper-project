const router = require('express').Router();
const {
  models: { Cart, User },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const items = await Cart.findAll({
      where: { userId: user.id, purchased: false },
    });

    res.send(items);
  } catch (err) {
    next(err);
  }
});

router.get('/history', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const items = await Cart.findAll({
      where: { userId: user.id, purchased: true },
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
    const [item, created] = await Cart.findOrCreate({
      where: {
        userId: user.id,
        productId,
        name,
        price,
      },
    });
    if (created) {
      item.quantity = quantity;
      await item.save();
      res.send(item);
    } else {
      const newQuantity = item.quantity + quantity;
      const updatedItem = await item.update({ quantity: newQuantity });
      res.send(updatedItem);
    }
  } catch (err) {
    next(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const { newQuantity, productId } = req.body;
    const item = await Cart.findOne({
      where: { userId: user.id, productId },
    });
    const updatedItem = await item.update({ quantity: newQuantity });
    res.send(updatedItem);
  } catch (err) {
    next(err);
  }
});

router.delete('/:productId', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const { productId } = req.params;
    const itemToDelete = await Cart.findOne({
      where: { userId: user.id, productId },
    });
    await itemToDelete.destroy();
    res.send(itemToDelete);
  } catch (error) {
    next(error);
  }
});
