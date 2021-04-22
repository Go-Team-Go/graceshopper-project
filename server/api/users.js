const router = require('express').Router();
const {
  models: { User },
} = require('../db');

module.exports = router;

//GET api/users
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

//I would like to create a get route that allows only an admit to view all users

//GET api/users/allUsers
router.get('/allUsers', async (req, res, next) => {
  try {
    //auth a user and check they have admin rights, then I can  pull the all user data
    const user = await User.findByToken(req.headers.authorization);
    if (user.admin === true) {
      return User.findAll();
    }

    //otherwise I will return a message that say you do not have admin rights
    console.log(
      'FROM USERS ROUTE = /allUsers --------------??>>>>>>>>>>.',
      user,
    );

    res.send(user);
  } catch (err) {
    next(err);
  }
});
