const cardsRouter = require('express').Router();

const { getCards, createCard, deleteCard } = require('../controllers/cards.js');

cardsRouter.get('/cards', getCards)
cardsRouter.post('/cards', createCard);
cardsRouter.delete('/cards/:id', deleteCard);

module.exports = cardsRouter;
