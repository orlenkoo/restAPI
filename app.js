require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  let code = req.body.code
  code = code.split("=")
  let result = {}
  try {
    result[code[0]] = eval(code[1])
    return res.send(result);
  } catch (e) {
    return res.send("Wrong parameters")
  }
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);