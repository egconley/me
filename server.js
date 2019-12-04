'use strict';

require('dotenv').config();
const express = require('express');
const superagent = require('superagent');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
