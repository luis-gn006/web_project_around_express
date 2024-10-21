const allRouter = require('express').Router();

allRouter.all('*',(req, res) => {
  res.status(500).send({
    message: 'Not found'
  });
});

module.exports = allRouter;