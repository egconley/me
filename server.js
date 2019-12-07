'use strict';

// let adviceString;

// application dependencies
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
require('ejs');
const PORT = process.env.PORT || 3000;

// load environment variables from .env
require('dotenv').config();

// application setup
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.set('views', __dirname + '/public/views');

// routes
app.get('/', adviceHandler);
app.get('/advice', adviceHandler);

// render home page
function homePage(req, res) {
  adviceHandler();
  // res.render('pages/index');
}

// advice api
function adviceHandler(req, res) {
  let url = 'https://api.adviceslip.com/advice';

  superagent.get(url)
    .then(data => {
      console.log('the data: ', JSON.parse(data.text));
      let pieceOfAdvice = new AdviceSlip(JSON.parse(data.text));
      // new AdviceSlip(JSON.parse(data.text));
      res.render('pages/index', { adviceKey: pieceOfAdvice.slip.advice })
      // res.status(200).json(pieceOfAdvice.slip.advice);
    })
    // .then(pieceOfAdvice => {
    //   res.render('pages/index', { adviceKey: pieceOfAdvice })
    // })
  // .catch(() => {
  //   errorHandler(`So sorry, something went wrong.`, req, res);
  // });
}

// render api data with ejs
// superagent.get(url)
//   .then(data => data.body._embedded.events.map(events => new TicketMaster(events)))
//   .then(eventsArr => res.render('pages/searches/events', { eventsArrKey: eventsArr, }))
//   .catch(() => {
//     res.render('pages/error');
//   });

function AdviceSlip(advice) {
  this.slip = advice.slip;
  // console.log(this);
}

function errorHandler(error, req, res) {
  res.status(500).send(error);
}

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})
