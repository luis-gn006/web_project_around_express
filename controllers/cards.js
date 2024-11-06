const Card = require('../models/card.js');
const { ApiError, ValidationError } = require('../components/errorHandlers');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then(card => res.send({ data: card}))
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

module.exports.createCard = (req, res) => {
  owner = req.user._id;
  const { name, link } = req.body;
  Card.create({ name, link ,owner})
    .then(card => res.send({ data: card }))
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

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .then(card => res.send({ message: "Tarjeta eliminada", data: card }))
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

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate( req.params.cardId, { $addToSet: { likes: req.user._id } }, {new: true})
    .then(card => res.send({message: 'Tarjeta actualizada' , data: card }))
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

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate( req.params.cardId, { $pull: { likes: req.user._id } }, {new: true})
    .then(card => res.send({message: 'Tarjeta actualizada' , data: card }))
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