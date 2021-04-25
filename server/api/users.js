const router = require('express').Router();
const {
  models: { User },
} = require('../db');
const { requireToken, isAdmin } = require('./gateKeeperMiddleWare');

module.exports = router;

//GET api/users    ----> find all logged in admin users new stuff
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      attributes: ['id', 'username', 'email', 'admin'],
    });
    res.send(allUsers);
  } catch (err) {
    next(err);
  }
});
