const router = require('express').Router();
const {
  models: { Product },
} = require('../db');
const { requireToken, isAdmin } = require('./gateKeeperMiddleWare');

module.exports = router;

//GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    next(err);
  }
});

// GET /products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id);
    res.send(singleProduct);
  } catch (error) {
    next(error);
  }
});

//POST api/products       ---> add products
router.post('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    console.log(
      'req.body for the post api/products route===============>>>>>>>>>>>>>>$$$$$$',
      req.body,
    );

    const { name, description, imageUrl, price, quantity } = req.body;
    const product = await Product.create({
      name,
      description,
      imageUrl,
      price,
      quantity,
    });
    res.status(201).send(product);
  } catch (err) {
    next(err);
  }
});

//DELETE api/products/:id
router.delete('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const prodToDelete = await Product.findByPk(req.params.id);

    if (!prodToDelete) {
      res.status(404).send('Product was not found in the database');
    }

    await prodToDelete.destroy();
    res.status(204).send('Delete successful!');
  } catch (err) {
    next(err);
  }
});

//PUT api/products/:id    ---> edit products
router.put('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const { name, description, imageUrl, price, quantity } = req.body;
    const productInst = await Product.findByPk(req.params.id);
    if (!productInst) {
      res.status(404).send('Product was not found in the database');
    }

    console.log(
      '/PUT api/products/:id =========================>>>>>>>>>>',
      req.body,
    );

    await productInst.update({ name, description, imageUrl, price, quantity });
    res.send(productInst);
  } catch (err) {
    next(err);
  }
});
