if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
		var dfd = $.Deferred();
		setTimeout(function() {
			dfd.resolve(value)
		},Math.random()*100);
		return dfd.promise();
    },

    manipulateRemoteData : function(url) {
		var dfd = $.Deferred();
		
		 $.ajax(url).then(function(response)
		 {
			var names =  $.map(response.people,function(v)
            {
					return v.name;
			});
		    dfd.resolve(names.sort());
		 });
	    return dfd.promise();
    }
  };
});
