const usersRouter = require('express').Router();
const fs = require('fs/promises');
const path = require('path');
const doesUserExist = require('../middleware/users');

const usersFile = path.join(__dirname, '..', 'data', 'users.json');

const { getUser, createUser, getUsers } = require('../controllers/user.js');

usersRouter.get('/users', getUsers)
usersRouter.get('/users/:id', doesUserExist, getUser);
usersRouter.post('/users', createUser);


module.exports = usersRouter;
