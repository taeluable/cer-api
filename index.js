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

app.post('/:x', jsonParser, function (req, res, next) {
  const x = req.params.x;
  var Email = req.body.Email
  res.json({ Email })
  // process the POST request and update the database table
});




 app.listen('3001', () => {
    console.log('Sever is runnong on port 3001')
 })

