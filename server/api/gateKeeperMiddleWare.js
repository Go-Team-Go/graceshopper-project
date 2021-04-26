const {
  models: { User },
} = require('../db');

//These are middleware methods that can be used in api routes to add extra checks before hitting the routes

//just adding errors for when the user does not exist
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

//using find or create to find and it in the cart
//adds a key wasUpdated = (boolean) if a cart was updated

const isAdmin = async (req, res, next) => {
  if (req.user.admin === false) {
    return res
      .status(403)
      .send('Unauthorized: This user does not have admin access');
  } else {
    next();
  }
};

module.exports = {
  requireToken,
  isAdmin,
};
