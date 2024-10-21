const allRouter = require('express').Router();

allRouter.all('*', (req, res) => {
  res.status(500).send({
    message: 'Recurso solicitado no encontrado',
  });
});

module.exports = allRouter;
