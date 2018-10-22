
var jsonFile = require('jsonfile')

var fileName = 'service.json'

//ABORT ERROR STATUS CODES
jsonFile.readFile(fileName, function(err, jsonData) {
  
  console.log(jsonData);
  for (var i = 0; i < jsonData.length; ++i) {
    
    console.log("error type: "+jsonData[i].sessionErrorCode);
  }
});

 //UXML ERROR STATUS CODES
 var theFileName = 'uxmlerror.json'

 jsonFile.readFile(theFileName, function(err, jsonData) {
  console.log(jsonData);
  for (var i = 0; i < jsonData.length; ++i) {
    
    console.log("error type: "+jsonData[i].uxmlErrorCode);
    
    
  }
});
