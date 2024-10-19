const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const bodyParser = require('body-parser');

const usersFile = path.join(__dirname, 'data' , 'users.json');
const cardsFile = path.join(__dirname, 'data' , 'cards.json');


const { PORT = 3000 } = process.env;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/users', (req, res) => {
  fs.readFile(usersFile).then(data => {
    res.send(JSON.parse(data));
  })
});

app.get('/users/:id', (req, res) => {
  fs.readFile(usersFile, 'utf-8').then( data => {
    const users = JSON.parse(data);
    const user = users.find((u) => u._id === req.params.id);
    if (!user) {
      res.status(404);
      res.send({ error: `ID de usuario no encontrado` });
      return;
    }
    res.send({
      status: !!user,
      data: user
    })
  })
});

app.post('/users', (req,res) => {
  const user = req.body;
  fs.readFile(usersFile).then(data => {
    const users = JSON.parse(data);
    users.push(user);
    fs.writeFile(usersFile, JSON.stringify(users)).then(() => {
      res.send({
        status: true,
        message: 'new user created',
        data: user
      })
    })
  }).catch(err => {
    res.status(500).send(err)
  })
})

app.get('/cards', (req, res) => {
  fs.readFile(cardsFile).then(data => {
    res.send(JSON.parse(data));
  })
});

app.all('*',(req, res) => {
  res.send({
    status: 500,
    message: 'Not Found'
  })
})

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

