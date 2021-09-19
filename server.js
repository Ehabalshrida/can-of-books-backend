'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
const axios = require("axios");
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT;













app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    });