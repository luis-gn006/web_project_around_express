const User = require('../models/user.js');
const { ApiError, ValidationError } = require('../components/errorHandlers');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then(user => res.send({ data: user}))
    .catch(err => {
      const serverError = new ApiError();
      res.status(serverError.statusCode).send({
        error: {
          name: serverError.name,
          message: serverError.message,
          statusCode: serverError.statusCode
        }
      });
    })
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.send({ data: user }))
    .catch(err => {
      const serverError = new ApiError();
      res.status(serverError.statusCode).send({
        error: {
          name: serverError.name,
          message: serverError.message,
          statusCode: serverError.statusCode
        }
      });
    })
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch(err => {
      if (err.name === 'ValidationError') {
        const validatorError = new ValidationError();
        res.status(validatorError.statusCode).send({
          error: {
            name: validatorError.name,
            message: validatorError.message,
            statusCode: validatorError.statusCode
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
  })
};