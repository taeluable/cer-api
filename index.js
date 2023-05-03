const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
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

app.post('/:x', (req, res) => {
  const x = req.params.x;
  // process the POST request and update the database table
});

app.delete('/:x', (req, res) => {
  const x = req.params.x;
  // process the DELETE request and delete the corresponding record from the database table
});

app.put('/:x', (req, res) => {
  const x = req.params.x;
  // process the UPDATE request and update the corresponding record in the database table
});


 app.listen('3001', () => {
    console.log('Sever is runnong on port 3001')
 })
