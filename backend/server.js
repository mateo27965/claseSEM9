const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');

const app = express()
const port = 3080

// place holder for the data
const users = ['JOhn','Pepe'];

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  console.log('api/users invocada !')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Agregando user:::::', user);
  users.push(user);
  res.json("user agregado");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});

