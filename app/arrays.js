if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		return arr.indexOf(item);
    },

    sum : function(arr) {
		var total = 0;
		for ( var i=0; i< arr.length;i++){
			total += arr[i];
		 }
		return total;
    },

    remove : function(arr, item) {
		while(arr.indexOf(item) != -1)
			{
			  arr.splice(arr.indexOf(item),1);
			}
		return arr;
    },

    removeWithoutCopy : function(arr, item) {
		while(arr.indexOf(item) != -1)
			{
			  arr.splice(arr.indexOf(item),1);
			}
		return arr;
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		arr.pop();
		return arr;
    },

    prepend : function(arr, item) {
		arr.unshift(item);
		return arr;
    },

    curtail : function(arr) {
	   arr.shift();
       return arr;
    },

    concat : function(arr1, arr2) {
	return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
		arr.splice(index,0,item);
		return arr;
    },

    count : function(arr, item) {
		var count = 0;
		for(var i=0; i<arr.length;i++){
			if(arr[i] === item)
			{
				count++;
			}
		}
		return count;
    },

    duplicates : function(arr) {
		var tempArray = [];
		arr.sort();
		for(var i=1; i<arr.length;i++){
			if(arr[i] === arr[i-1])
			{
				if(!tempArray.includes(arr[i]))
				tempArray.push(arr[i]);
			}
		}
        return tempArray;
    },

    square : function(arr) {
		for(var i=0; i<arr.length;i++)
		{
			arr.splice(i,1,arr[i]*arr[i]);
		}
		return arr;
    },

    findAllOccurrences : function(arr, target) {
		var tempArray =[];
		for(var i=0; i<arr.length;i++){
			if(arr[i] === target)
			{
				tempArray.push(i);
			}
		}
		return tempArray;
    }
  };
});
