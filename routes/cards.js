const cardsRouter = require('express').Router();
const fs = require('fs/promises');
const path = require('path');

const cardsFile = path.join(__dirname, '..', 'data' , 'cards.json');


cardsRouter.get('/cards', (req, res) => {
  fs.readFile(cardsFile).then(data => {
    res.send(JSON.parse(data));
  })
});

module.exports = cardsRouter;