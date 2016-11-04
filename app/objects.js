if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var objOwnProperties = [];
      for(var i in obj)
      {
        if(obj.hasOwnProperty(i))
        {
          objOwnProperties.push(i + ": "+obj[i]);
        }
      }
      return objOwnProperties;
    }
  };
});
