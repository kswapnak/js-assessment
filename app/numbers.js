if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      var binString = num.toString(2);
      return parseInt(binString.charAt(binString.length-bit));
    },

    base10: function(str) {
      return parseInt(str,2);
    },

    convertToBinary: function(num) {
      var binString = num.toString(2);
      var count = binString.length;
      if(count <8)
      {
        binString = "0"+binString;
        count++
      }
      return binString;
    },

    multiply: function(a, b) {
      var exp1 = (a.toString().split('.')[1] || []).length;
      var exp2 = (b.toString().split('.')[1] || []).length;

      var den = Math.pow(10,exp1)*Math.pow(10,exp2);
      
      return ((a*Math.pow(10,exp1)) * (b*Math.pow(10,exp2)))/den;
    }
  };
});

