if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var filesList = [];
      var dirList = [];
      parseData(data);
      function parseData(jsData)
      {
        dirList.push(jsData.dir);
        var isSubDir = (dirList.indexOf(dirName)>-1);
        if(!jsData) return;
        for(var i in jsData.files)
        {
          if(typeof jsData.files[i]=== 'string'||jsData.files[i] instanceof String )
          {
            if(!dirName|| isSubDir)
            {
             filesList.push(jsData.files[i]);
            }
          }
          else
          {
            parseData(jsData.files[i]);
          }
        }
        dirList.pop();
      }
      return filesList;
    },

    permute: function(arr) {
       var answer = [];
       var permArray = [];

       function perm(arrVal)
       {
         for(var i in arrVal){
           var fixedprefix = arr.splice(i,1);
           permArray.push(fixedprefix);
           if(arrVal.length)
           {
             perm(arrVal);
           }
           else{
             answer.push(permArray.slice());
           }
           permArray.pop();
           arrVal.splice(i,0,fixedprefix)
         }
         return answer;
       }
      return  perm(arr);
    }
  };
});
