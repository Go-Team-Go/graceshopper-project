const router = require('express').Router();
const {
  models: { User },
} = require('../db');
module.exports = router;

//LOGIN /auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    res.send({ token: await User.authenticate({ username, password }) });
  } catch (err) {
    next(err);
  }
});

//POST /auth/signup
router.post('/signup', async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const user = await User.create({ username, password, email });
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

//GET /auth/me
router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});
