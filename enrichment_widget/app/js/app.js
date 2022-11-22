ZOHO.embeddedApp.on("PageLoad", function(data) {

    var api_url = "https://api.apollo.io/v1/people/match";



    



var id = data.EntityId, module = data.Entity;

ZOHO.CRM.API.getRecord({Entity: module, RecordID:id})
.then(function(data){





    console.log(data);

    // This is the information about the current record, if applicable.
    var data =	{
        "VARIABLES":{
             "apikey" : "*********", 
             "First_Name" : "Naresh", 
             "Last_Name" : "Babu", 
             "email" : "naresh.babu@zylker.com"
           },
           "PARTS":{
            "headers": {"Content-Type": "application/json","Cache-Control": "no-cache"}
           }
       }
   ZOHO.CRM.CONNECTOR.invokeAPI(api_url,data)
   .then(function(data){
       console.log(data);


   })







});


});

ZOHO.embeddedApp.init();
