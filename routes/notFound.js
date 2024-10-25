const notFoundRouter = require('express').Router();

notFoundRouter.all('*', (req, res) => {
  res.status(500).send({
    message: 'Recurso solicitado no encontrado',
  });
});

module.exports = notFoundRouter;
