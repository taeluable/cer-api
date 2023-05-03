const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
require('dotenv').config();

app.use(cors());

const connection = mysql.createConnection(process.env.DATABASE_URL);

app.get('/:x', (req, res) => {
  const x = req.params.x;
  connection.query(`SELECT * FROM ${x}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    } 
  });
});

app.post('/:x', jsonParser, (req, res) => {
  const x = req.params.x;
  const data = req.body;
  connection.query(`INSERT INTO ${x} SET ?`, data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error inserting data into database');
    } else {
      console.log(result);
      res.status(200).send('Data inserted successfully');
    } 
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
