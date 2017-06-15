define(['./Calculator'],

/**
* Advanced Calculator object, performs simple arithmetic and basic basic trigonometry.
*/
function (Calculator) {

  /** Extends Calculator */
  ScientificCalculator.prototype = new Calculator();

  /**
  * Instanciation
  */
  function ScientificCalculator() { /* Empty Constructor */ }

  /**
  * ScientificCalculator.sin 
  * @param a number (integer or float)
  * @return number result
  */
  Calculator.prototype.sin = function (a) {
    return Math.sin(a);
  };

  /**
  * ScientificCalculator.cos 
  * @param a number (integer or float)
  * @return number result
  */
  Calculator.prototype.cos = function (a) {
    return Math.cos(a);
  };

  /**
  * ScientificCalculator.tan 
  * @param a number (integer or float)
  * @return number result
  */
  Calculator.prototype.tan = function (a) {
    return Math.tan(a);
  };

  /**
  * ScientificCalculator.log 
  * @param a number (integer or float)
  * @return number result
  */
  Calculator.prototype.log = function (a) {
    return Math.log(a);
  };

  return ScientificCalculator;

});