var Calculate = require('../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $("#calcInput").submit(function(event) {
    event.preventDefault();
        var operator = $("input:radio[name=operator]:checked").val();
        var number1 = parseInt($("#valInput").val());
        var number2 = parseInt($("#valInput2").val());
        var thisCalculate = new Calculate();
        var output1 = thisCalculate.Add(number1, number2);
        var output2 = thisCalculate.Subtract(number1, number2);
        var output3 = thisCalculate.Multiply(number1, number2);
        var output4 = thisCalculate.Divide(number1, number2);
        var output5 = thisCalculate.Exponent(number1, number2);
        var output6 = thisCalculate.Percent(number1, number2);

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
