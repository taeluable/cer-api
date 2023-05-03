const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()


app.use(cors());

const connection = mysql.createConnection(process.env.DATABASE_URL)


app.get('/audit',(req,res) => {
    connection.query("SELECT * FROM audit",(err,result) => {
        if(err){
            console.log(err);
        }else{
            console.log('Connected to PlanetScale!')
            res.send(result);
        } 
    })
})

app.get('/',(req,res) => {
    console.log('hello')
    res.send('hello')
    })

 app.listen('3001', () => {
    console.log('Sever is runnong on port 3001')
 })
