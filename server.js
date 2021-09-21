'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const axios = require("axios");
const mongoose  = require('mongoose');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT;
const {seedBook}=require("./Models/Book.model");
const bookcontroller=require("./controllers/book.controller")
const MONGO_SERVER=process.env.MONGO_SERVER;

mongoose.connect(`${MONGO_SERVER}`,{useNewUrlParser: true, useUnifiedTopology: true})

app.get('/seed-data',(req,res)=>{
        seedBook();
       res.json({
           "message":"Author Object Created succefully"
       });})



app.get('/books',bookcontroller);




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    });