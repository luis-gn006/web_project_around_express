const notFoundRouter = require('express').Router();
const {ApiError} = require('../components/errorHandlers');

notFoundRouter.all('*', (req, res) => {
  const error = new ApiError();
  res.send({
    error: {
      statusCode: error.statusCode,
      name: error.name,
      message: error.message
    }
  })
});

module.exports = notFoundRouter;
