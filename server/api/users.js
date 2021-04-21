const router = require('express').Router();
const {
  models: { User, Product },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/cart', async (req, res, next) => {
  try {
    const cart = await User.findByPk(req.params.id, {
      include: { model: Product },
      // attributes: ['products'],
    });
    console.log('IN THE ROUTE', cart);
    res.send(cart.products);
  } catch (err) {
    next(err);
  }
});
