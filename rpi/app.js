const gpio = require('rpi-gpio');
const Motor = require('./magic-motor.js')
const express = require('express');
const app = express();

var left = new Motor(7, 11);
var right = new Motor(13, 15);
left.export();
right.export();

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/forward', function (req, res) {
  console.log("forward");
  left.forward(function(err) {
  });

  right.forward(function(err) {
  });

  res.send('OK');
})

app.get('/backward', function (req, res) {
  console.log("backward");
  left.backward(function(err) {
  });

  right.backward(function(err) {
  });

  res.send('OK');
})

app.get('/left', function (req, res) {
  console.log("left");
  left.forward(function(err) {
  });

  right.stop();

  res.send('OK');
})

app.get('/right', function (req, res) {
  console.log("right");
  left.stop();

  right.forward(function(err) {
  });

  res.send('OK');
})

app.get('/stop', function (req, res) {
  console.log("stop");
  left.stop();
  right.stop();

  res.send('OK');
})
