const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const allRouter = require('./routes/all');

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('/', allRouter);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

