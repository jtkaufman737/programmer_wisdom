const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

require('./app/routes')(app, {});

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, (args) => {
  console.log("We are live on " + port);
})
