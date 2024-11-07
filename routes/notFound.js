const notFoundRouter = require('express').Router();
const ApiError = require('../components/ApiError');

notFoundRouter.all('*', (req, res) => {
  const error = new ApiError();
  res.send({
    error: {
      statusCode: error.statusCode,
      name: error.name,
      message: 'Recurso solicitado no encontrado',
    },
  });
});

module.exports = notFoundRouter;
