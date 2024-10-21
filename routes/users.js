const usersRouter = require('express').Router();
const fs = require('fs/promises');
const path = require('path');
const doesUserExist = require('../middleware/users');

const usersFile = path.join(__dirname, '..', 'data', 'users.json');

usersRouter.get('/users', (req, res) => {
  fs.readFile(usersFile).then(data => {
    res.status(200).send(JSON.parse(data));
  });
});

usersRouter.get('/users/:id', doesUserExist, (req, res) => {
  res.send({
    status: !!req.user,
    data: req.user,
  });
});

usersRouter.post('/users', (req, res) => {
  const user = req.body;
  fs.readFile(usersFile).then(data => {
    const users = JSON.parse(data);
    users.push(user);
    fs.writeFile(usersFile, JSON.stringify(users)).then(() => {
      res.send({
        message: 'new user created',
        data: user,
      });
    });
  }).catch(err => {
    res.status(500).send(err);
  });
});

module.exports = usersRouter;
