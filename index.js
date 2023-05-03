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

app.get('/ocb', (req, res) => {
  connection.query("SELECT table_name FROM information_schema.tables WHERE table_schema = '<ocb>'", (err, tables) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to PlanetScale!');

      let results = {};

      tables.forEach(table => {
        connection.query(`SELECT * FROM ${table.table_name}`, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            results[table.table_name] = result;
          }
        });
      });

      res.send(results);
    }
 


 app.listen('3001', () => {
    console.log('Sever is runnong on port 3001')
 })
