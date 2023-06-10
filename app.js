const express = require("express")
const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/EMS'
const app = express()
require('dotenv').config();

var cors = require('cors')

const bodyParser = require('body-parser');
const item = require('./controller/employee');
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

app.use(express.json());
const corsOptions = {
    origin: '*',
}
app.use(cors(corsOptions))
pool.connect((err, client, done) => {
    if (err) console.log(err);
    console.log('Connected to PostgreSQL database');
  });

app.use('/item', item);


app.get('/', (req, res) => {
    res.send('home');
});
app.listen(3000);