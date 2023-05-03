const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
var bodyParser = require('body-parser')
varjsonParser = bodyParser.json()
require('dotenv').config()


app.use(cors());

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/',(req,res) => {
    console.log('hello')
    res.send('hello')
})

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
  const { Email } = req.body;
  connection.query(`INSERT INTO ${x} (email) VALUES (?)`, [Email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error while inserting data");
    } else {
      res.status(200).send("Data inserted successfully");
    } 
  });
});





 app.listen('3001', () => {
    console.log('Sever is runnong on port 3001')
 })

