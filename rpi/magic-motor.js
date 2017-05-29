var gpio = require("rpi-gpio");

var Motor = function (pin1, pin2) {
  this._pin1 = parseInt(pin1);
  this._pin2 = parseInt(pin2);
}

Motor.prototype.export = function () {
  gpio.setup(this._pin1, gpio.DIR_OUT);
  gpio.setup(this._pin2, gpio.DIR_OUT, function (err) {
    if(err) throw err;
  });
}

Motor.prototype.forward = function () {
  gpio.write(this._pin1, 1, function(err){
    if(err) throw err;
  });
  gpio.write(this._pin2, 0, function(err){
    if(err) throw err;
  });
}

Motor.prototype.backward = function () {
  gpio.write(this._pin1, 0, function(err){
    if(err) throw err;
  });
  gpio.write(this._pin2, 1, function(err){
    if(err) throw err;
  });
}

Motor.prototype.stop = function () {
  gpio.write(this._pin1, 0, function(err){
    if(err) throw err;
  });
  gpio.write(this._pin2, 0, function(err){
    if(err) throw err;
  });
}

module.exports = Motor;
