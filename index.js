'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Warriors = require('./model/warriors');

var warriors = new Warriors();

app.use(bodyParser.json());

app.post('/heroes', function(req, res) {
    var createdID = warriors.addWarrior(req.query.type, req.query.hp, req.query.weapon);
    res.status(200).send({ id: createdID });
});

app.get('/heroes', function(req, res) {
    res.status(200).send({ warriors: warriors.getWarriors() });
});

app.listen(3000, function () {
  console.log('Library service is listening on port ', this.address().port);
});

module.exports = app;