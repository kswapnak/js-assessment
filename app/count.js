if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
			var timeout;
			function print()
			{
				console.log(start++);
				if(start<=end)
				{
			    	timeout =	setTimeout(print,100);
				}		
			}
		    print();
		    return{
		    cancel: function(){
				clearTimeout(timeout) && timeout;
			 }
		  };
		}
	};
});