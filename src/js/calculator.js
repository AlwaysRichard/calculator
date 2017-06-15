define([],

/**
* Basic Calculator object, performs simple arithmetic.
*/
function () {

  /** Not A Number returned when an invalid calculation. */
  var notNumber = NaN;

  /**
  * Instanciation
  */
  function Calculator() { /** Empty Constructor */ }

  /**
  * Calculator.add 
  * @param a number (integer or float)
  * @param b number (integer or float)
  * @return number result
  */
  Calculator.prototype.add = function (a, b) {
    return (a + b);
  };

  /**
  * Calculator.subtract
  * @param a number (integer or float)
  * @param b number (integer or float)
  * @return number result
  */
  Calculator.prototype.subtract = function (a, b) {
    return (a - b);
  };

  /**
  * Calculator.multiply
  * @param a number (integer or float)
  * @param b number (integer or float)
  * @return number result
  */
  Calculator.prototype.multiply = function (a, b) {
    return (a * b);
  };

  /**
  * Calculator.divide
  * @param a number (integer or float)
  * @param b number (integer or float)
  * @return number result (if posable otherwise NaN)
  */
  Calculator.prototype.divide = function (a, b) {
    if (b === 0) {
      result = notNumber;
    }
    else {
      result = a / b;
    }
    return result;
  };

  return Calculator;

});