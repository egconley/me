'use strict';

// application dependencies
const express = require('express');
const superagent = require('superagent');
const PORT = process.env.PORT || 3000;

// load environment variables from .env
require('dotenv').config();

// application setup
const app = express();
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
