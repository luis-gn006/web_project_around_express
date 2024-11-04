const Card = require('../models/card.js');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then(card => res.send({ data: card}))
    .catch(err => res.status(500).send({ message: 'Error'}));
};

module.exports.createCard = (req, res) => {
  owner = req.user._id;
  const { name, link } = req.body;
  Card.create({ name, link ,owner})
    .then(card => res.send({ data: card }))
    .catch(err => res.status(500).send({ message: 'Error' ,err}));
};

module.exports.deleteCard = (req, res) => {
  const { id } = req.body;

  Card.delete({ id })
    .then(card => res.send({ data: card }))
    .catch(err => res.status(500).send({ message: 'Error' ,err}));
};