(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculate = exports.Calculate = function () {
  function Calculate() {
    _classCallCheck(this, Calculate);
  }

  _createClass(Calculate, [{
    key: "Add",
    value: function Add(number1, number2) {
      return number1 + number2;
    }
  }, {
    key: "Subtract",
    value: function Subtract(number1, number2) {
      return number1 - number2;
    }
  }, {
    key: "Multiply",
    value: function Multiply(number1, number2) {
      return number1 * number2;
    }
  }, {
    key: "Divide",
    value: function Divide(number1, number2) {
      return number1 / number2;
    }
  }, {
    key: "Exponent",
    value: function Exponent(number1, number2) {
      return number1 ** number2;
    }
  }, {
    key: "Percent",
    value: function Percent(number1, number2) {
      return number2 / 100;
    }
  }]);

  return Calculate;
}();

},{}],2:[function(require,module,exports){
"use strict";

function Calculator() {}

Calculator.prototype.pingPong = function (goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
};

exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
"use strict";

var _calculator = require("./../js/calculator.js");

$(document).ready(function () {
  $("#calcInput").submit(function (event) {
    event.preventDefault();
    var operator = $("input:radio[name=operator]:checked").val();
    var number1 = parseInt($("#valInput").val());
    var number2 = parseInt($("#valInput2").val());
    var thisCalculate = new _calculator.Calculate();
    var output = "the answer";

    if (operator === "add") {
      var _output = thisCalculate.Add(number1, number2);
      $("#output").prepend("<li>" + _output + "</li>");
    } else if (operator === "subtract") {
      var _output2 = thisCalculate.Subtract(number1, number2);
      $("#output2").prepend("<li>" + _output2 + "</li>");
    } else if (operator === "multiply") {
      var _output3 = thisCalculate.Multiply(number1, number2);
      $("#output3").prepend("<li>" + _output3 + "</li>");
    } else if (operator === "divide") {
      var _output4 = thisCalculate.Divide(number1, number2);
      $("#output4").prepend("<li>" + _output4 + "</li>");
    } else if (operator === "exponent") {
      var _output5 = thisCalculate.Exponent(number1, number2);
      $("#output5").prepend("<li>" + _output5 + "</li>");
    } else if (operator === "percent") {
      var _output6 = thisCalculate.Percent(number1, number2);
      $("#output6").prepend("<li>" + _output6 + "</li>");
    }
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function () {
  $('#ping-pong-form').submit(function (event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator();
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function (element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function () {
  $('#signup').submit(function (event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function () {
  $('#time').text(moment());
});

},{"./../js/calculator.js":1,"./../js/pingpong.js":2}]},{},[3]);
