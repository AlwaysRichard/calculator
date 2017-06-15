define([],

/**
* Functional mixin for Calculator perofrms multipication and division
* on groups of numbers (base number raised to nth power)
*/
function () {

  /**
  * Instanciation
  */
  var withExponents = function () {

    /**
    * Clculates base number rased to an exponent.
    * @param base number (integer or float)
    * @param exponent number (integer or float)
    * @return number result
    */
    this.pow = function (base, exponent) {
      return Math.pow(base, exponent);
    };

    /**
    * Multiples sets of numbers [a1,a2], [a2,b2], ..., [an, bn]
    * 
    *   result = a1^b1 * a2^b2 * ... * an^bN
    *
    * @param array [base, exponent], ...
    * @return number result
    */
    this.multiplyExp = function () {

      var result = 1.0;

      for (var i = 0; i < arguments.length; i++) {
        var base_exponent = arguments[i];
        var base = base_exponent[0];
        var exponent = base_exponent[1];
        result *= this.pow(base, exponent);
      }

      return result;

    };

    /**
    * Devides sets of numbers [a1,a2], [a2,b2], ..., [an, bn]
    * 
    *   result = a1^b1 / a2^b2 / ... / an^bN
    *
    * @param array [base, exponent], ...
    * @return number result
    */
    this.divideExp = function () {

      var result = 1.0;

      for (var i = 0; i < arguments.length; i++) {
        var base_exponent = arguments[i];
        var base = base_exponent[0];
        var exponent = base_exponent[1];

        if (i === 0) {
          result = this.pow(base, exponent);
        }
        else {
          result /= this.pow(base, exponent);
        }
      }

      return result;

    };

  };

  return withExponents;

});