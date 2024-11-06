const Card = require('../models/card.js');
const { ApiError, NotFoundError } = require('../components/errorHandlers');

const doesCardExist = async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.cardId).orFail();
    req.cardId = card;
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
    }
  }
};

module.exports = doesCardExist;
