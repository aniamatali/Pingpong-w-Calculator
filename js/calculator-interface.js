var Calculate = require('../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $("#calcInput").submit(function(event) {
    event.preventDefault();
    const operator = $("input:radio[name=operator]:checked").val();
    const number1 = parseInt($("#valInput").val());
    const number2 = parseInt($("#valInput2").val());
    const thisCalculate = new Calculate();
    const output = "the answer";

    if (operator === "add") {
      let output = thisCalculate.Add(number1, number2);
      $("#output").prepend("<li>"+output+"</li>");
    }  else if (operator === "subtract") {
      let output = thisCalculate.Subtract(number1, number2);
      $("#output2").prepend("<li>"+output+"</li>");
    } else if (operator === "multiply") {
      let output = thisCalculate.Multiply(number1, number2);
      $("#output3").prepend("<li>"+output+"</li>");
    } else if (operator === "divide") {
      let output = thisCalculate.Divide(number1, number2);
      $("#output4").prepend("<li>"+output+"</li>");
    } else if (operator === "exponent") {
      let output = thisCalculate.Exponent(number1, number2);
      $("#output5").prepend("<li>"+output+"</li>");
    }  else if (operator === "percent") {
      let output = thisCalculate.Percent(number1, number2);
      $("#output6").prepend("<li>"+output+"</li>");
    }

      });

    });
