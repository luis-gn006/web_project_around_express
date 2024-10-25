const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const notFoundRouter = require('./routes/notFound');

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.json());

app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('/', notFoundRouter);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
