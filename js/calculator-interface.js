var Calculate = require('../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $("#calcInput").submit(function(event) {
    event.preventDefault();
        const operator = $("input:radio[name=operator]:checked").val();
        const number1 = parseInt($("#valInput").val());
        const number2 = parseInt($("#valInput2").val());
        const thisCalculate = new Calculate();
      


      });

    });
