const {
  models: { User },
} = require('../db');

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
