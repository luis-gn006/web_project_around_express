const usersRouter = require('express').Router();
const doesUserExist = require('../middleware/users');

const { getUser, createUser, getUsers } = require('../controllers/users.js');

usersRouter.get('/users', getUsers)
usersRouter.get('/users/:id', doesUserExist, getUser);
usersRouter.post('/users', createUser);

module.exports = usersRouter;
