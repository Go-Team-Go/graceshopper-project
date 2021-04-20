const router = require('express').Router();
const {
  models: { Product },
} = require('../db');
module.exports = router;

// GET /products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id);
    res.send(singleProduct);
  } catch (error) {
    next(error);
  }
});
