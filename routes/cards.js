const cardsRouter = require('express').Router();
const doesCardExist = require('../middleware/cards');

const { getCards, createCard, deleteCard } = require('../controllers/cards.js');

cardsRouter.get('/cards', getCards)
cardsRouter.post('/cards', createCard);
cardsRouter.delete('/cards/:cardId', doesCardExist, deleteCard);

module.exports = cardsRouter;
