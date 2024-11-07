const User = require('../models/user');
const NotFoundError = require('../components/NotFoundError');

const doesUserExist = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).orFail();
    req.user = user;
    next();
  } catch (err) {
    if (err.name === 'CastError') {
      const customError = new NotFoundError();
      res.status(customError.statusCode).send({
        error: {
          name: customError.name,
          message: customError.message,
          statusCode: customError.statusCode,
        },
      });
    }
  }
};

module.exports = doesUserExist;
