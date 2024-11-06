const usersRouter = require('express').Router();
const doesUserExist = require('../middleware/users');

const { getUser, createUser, getUsers, updateUser, updateAvatar } = require('../controllers/users.js');

usersRouter.get('/users', getUsers)
usersRouter.get('/users/:id', doesUserExist, getUser);
usersRouter.post('/users', createUser);
usersRouter.patch('/users/:id', doesUserExist, updateUser);
usersRouter.patch('/users/:id/avatar', doesUserExist, updateAvatar);

module.exports = usersRouter;
