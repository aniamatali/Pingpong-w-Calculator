(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculate() {

}

Calculate.prototype.Add = function(number1, number2) {
  return number1 + number2;
};

Calculate.prototype.Subtract = function(number1, number2) {
  return number1 - number2;
};

Calculate.prototype.Multiply = function(number1, number2) {
  return number1 * number2;
};

Calculate.prototype.Divide = function(number1, number2) {
  return number1 / number2;
};

Calculate.prototype.Exponent = function(number1, number2) {
  return number1 ** number2;
};

Calculate.prototype.Percent = function(number1, number2) {
  return number2 / 100;
};

exports.calculatorModule = Calculate;

},{}],2:[function(require,module,exports){
function Calculator() {

}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
var Calculate = require('../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $("#calcInput").submit(function(event) {
    event.preventDefault();
        const operator = $("input:radio[name=operator]:checked").val();
        const number1 = parseInt($("#valInput").val());
        const number2 = parseInt($("#valInput2").val());
        const thisCalculate = new Calculate();
        const output1 = thisCalculate.Add(number1, number2);
        const output2 = thisCalculate.Subtract(number1, number2);
        const output3 = thisCalculate.Multiply(number1, number2);
        const output4 = thisCalculate.Divide(number1, number2);
        const output5 = thisCalculate.Exponent(number1, number2);
        const output6 = thisCalculate.Percent(number1, number2);

        if (operator === "add") {
          $("#output").prepend("<li>"+output1+"</li>");
        } else if (operator === "subtract") {
          $("#output2").prepend("<li>"+output2+"</li>");
        } else if (operator === "multiply") {
          $("#output3").prepend("<li>"+output3+"</li>");
        } else if (operator === "divide") {
          $("#output4").prepend("<li>"+output4+"</li>");
        } else if (operator === "exponent") {
          $("#output5").prepend("<li>"+output5+"</li>");
        } else if (operator === "percent") {
          $("#output6").prepend("<li>"+output6+"</li>");
        }


      });

    });

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator();
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"../js/calculator.js":1,"./../js/pingpong.js":2}]},{},[3]);
