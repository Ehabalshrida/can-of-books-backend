'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const axios = require("axios");
const mongoose  = require('mongoose');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_SERVER=process.env.MONGO_SERVER;

mongoose.connect(`${MONGO_SERVER}/bookStore`,{useNewUrlParser: true, useUnifiedTopology: true});










app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    });