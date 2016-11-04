if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(undefined,arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
     return function(str1)
     {
       return str +", "+str1;
     };
    },

    makeClosures : function(arr, fn) {
      var funcArray = [];
      var closFn = function(x)
      {
          return function(){
            return fn(x);
          };
      };
      funcArray = arr.map(closFn);
      return funcArray;
    },

    partial : function(fn, str1, str2) {
      return function(str){
        return fn(str1,str2,str);
      };
    },

    useArguments : function() {
      var sum = 0;
      for(var i in arguments)
      {
        sum += arguments[i];
      }
      return sum;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments,1);
      return fn.apply(null,args);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments,1);
      return function(){
        var partialargs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null,partialargs);
      };
    },

    curryIt : function(fn) {
      function f1(listofArgs){
        return function(arguments){
          listofArgs.push(arguments);
          if(listofArgs.length === fn.length)
          {
            return fn.apply(null, listofArgs);
          }
          else{
            return f1(listofArgs);
          }
        };
      }

      return f1([]);
   }
  };
});
 