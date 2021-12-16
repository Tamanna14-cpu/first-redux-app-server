const express = require('express')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

var cors = require('cors')
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;



// middleware
app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
    res.send('my new assignment 11 has come')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y9cyf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
