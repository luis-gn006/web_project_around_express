const User = require('../models/user.js');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then(user => res.send({ data: user}))
    .catch(err => res.status(500).send({ message: 'Error'}));
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: 'Error' ,err}));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: 'Error' ,err}));
};