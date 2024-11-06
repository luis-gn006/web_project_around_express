const User = require('../models/user.js');
const { ApiError, NotFoundError } = require('../components/errorHandlers');

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
          statusCode: customError.statusCode
        }
      });
    } else {
      const serverError = new ApiError();
      res.status(serverError.statusCode).send({
        error: {
          name: serverError.name,
          message: serverError.message,
          statusCode: serverError.statusCode
        }
      });
    }
  }
};

module.exports = doesUserExist;
