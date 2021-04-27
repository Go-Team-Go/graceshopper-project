const {
  models: { User },
} = require('../db');

//These are middleware methods that can be used in api routes to add extra checks before hitting the routes

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    if (!user) {
      return res.status(404).send('Not found: This user does not exist');
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const isAdmin = async (req, res, next) => {
  if (req.user.admin === false) {
    return res
      .status(403)
      .send('Unauthorized: This user does not have admin access');
  } else {
    console.log(
      'req.user isAdmin Middleware in BE ------>>>>>',
      req.user,
      'req.user.admin --->:',
      req.user.admin,
    );

    next();
  }
};

module.exports = {
  requireToken,
  isAdmin,
};
