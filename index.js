
var jsonFile = require('jsonfile')

var fileName = 'service.json'




function getErrorServiceCodes(errorCode)
{


    //get Error codes

    

    jsonFile.readFile(fileName, function(err, jsonData) {


        

        for(let i = 0; i < jsonData.length; i++)
        {

            if(jsonData[i].sessionErrorCode==errorCode)
            {
                

               console.log(jsonData[i].description);
               break;


            }

        }

        
      
  
    });
    
  
}

getErrorServiceCodes(12557);

