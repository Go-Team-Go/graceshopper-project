const router = require('express').Router();
const {
  models: { User },
} = require('../db');
<<<<<<< HEAD
module.exports = router;
=======
>>>>>>> main
const { requireToken, isAdmin } = require('./gateKeeperMiddleWare');

module.exports = router;

//GET api/users    ----> find all logged in admin users
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
<<<<<<< HEAD
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username'],
    });
    res.json(users);
=======
>>>>>>> main
    const allUsers = await User.findAll({
      attributes: ['id', 'username', 'email', 'admin'],
    });
    res.send(allUsers);
  } catch (err) {
    next(err);
  }
});
