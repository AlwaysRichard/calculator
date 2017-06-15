define([],

/**
* Promisses to execute function on the in a given object in milliseconds (ms)
*/
function () {

  /**
  * Instanciation
  * @param ms, the number of milliseconds to wait before executing,
  * @param object, the object/class to use
  * @param method, the method in the object
  * @param args, the arguments to be passed into method for execution.
  * @return the result in ms from time called.
  */
  var delay = function (ms, object, methodName, args) {

    var thePromise = new Promise(function (success, fail) {

      return new Promise(function(resolve) {
        setTimeout(function() {
          try {
            var result = object[method].apply(object, args);
          }
          catch (error) { /* do nothing */ }
        }, ms);
      });

    });

    return thePromise;

  };

  return delay;

});