function Calculate() {

  if (operator === "add") {
    let output = thisCalculate.Add(number1, number2);
    $("#output1").prepend("<li>"+output+"</li>");
  }  else if (operator === "subtract") {
    let output = thisCalculate.Subtract(number1, number2);
    $("#output2").prepend("<li>"+output+"</li>");
  } else if (operator === "multiply") {
    let output = thisCalculate.Multiply(number1, number2);
    $("#output3").prepend("<li>"+output+"</li>");
  } else if (operator === "division") {
    let output = thisCalculate.Divide(number1, number2);
    $("#output4").prepend("<li>"+output+"</li>");
  } else if (operator === "exponent") {
    let output = thisCalculate.Exponent(number1, number2);
    $("#output5").prepend("<li>"+output+"</li>");
  }  else if (operator === "percent") {
    let output = thisCalculate.Percent(number1, number2);
    $("#output6").prepend("<li>"+output+"</li>");
  }
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
