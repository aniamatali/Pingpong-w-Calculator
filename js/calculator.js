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
