const router = require('express').Router();
const { requireToken } = require('./gateKeeperMiddleWare');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {
  models: { Cart },
} = require('../db');
module.exports = router;

router.get('/', requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const items = await Cart.findAll({
      where: { userId: user.id, purchased: false },
    });

    res.send(items);
  } catch (err) {
    next(err);
  }
});

router.get('/history', requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const items = await Cart.findAll({
      where: { userId: user.id, purchased: true },
    });

    res.send(items);
  } catch (err) {
    next(err);
  }
});

//POST /api/cart/
//will have to separate post and put routes here

router.post('/', requireToken, async (req, res, next) => {
  try {
    const user = req.user;
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

router.put('/', requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const { newQuantity, productId } = req.body;
    const item = await Cart.findOne({
      where: { userId: user.id, productId, purchased: false },
    });
    const updatedItem = await item.update({ quantity: newQuantity });
    res.send(updatedItem);
  } catch (err) {
    next(err);
  }
});

router.put('/checkout', requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const cart = req.body;
    const cartIds = cart.map((item) => {
      return item.productId;
    });
    const date = new Date();

    const newCart = await Cart.update(
      { purchased: true, purchasedDate: date },
      {
        where: {
          userId: user.id,
          productId: {
            [Op.in]: cartIds,
          },
        },
      },
    );
    res.send(newCart);
  } catch (err) {
    next(err);
  }
});

router.delete('/:productId', requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const { productId } = req.params;
    const itemToDelete = await Cart.findOne({
      where: { userId: user.id, productId, purchased: false },
    });
    await itemToDelete.destroy();
    res.send(itemToDelete);
  } catch (error) {
    next(error);
  }
});
