ZOHO.embeddedApp.on("PageLoad", function(data) {
    ZOHO.CRM.UI.Resize({height:"1200",width:"1200"}).then(function(data){
        console.log(data);
    });
    console.log(data);
     var recordId = data.EntityId[0];
  
    
    var moduleName = data.Entity[0];

    console.log(recordId);
    var func_name = "getApolloData";
    var req_data ={
      "arguments": JSON.stringify({
        "id" : recordId
      })
    };
    ZOHO.CRM.FUNCTIONS.execute(func_name, req_data)
    .then(function(data){
        console.log(data);
    });
    










/*


    var api_url = "https://api.apollo.io/v1/people/match";

    try{
        var data = {
        api_key: "CimAYp3p4OegDg3MRj-MRA",
        first_name: "Tim",
        last_name: "Zheng",
        organization_name: "Apollo Inc.",
        email: "name@domani.io",
        domain: "apollo.io"
        };
    
        var request ={
             url : api_url,
    
             headers:{
                "Content-Type": "application/json",
                "Cache-Control": "no-cache"
             },
             body:data
        }
        ZOHO.CRM.HTTP.post(request)
        .then(function(data){
            console.log(data);
        });

    }catch(err){
        console.log("here is the error" + err);
    }



    ZOHO.CRM.API.getRecord({Entity: moduleName, RecordID: recordId})
    .then(function (recordData) {
   




    console.log(recordData);

    // This is the information about the current record, if applicable.

  

});




*/
});




ZOHO.embeddedApp.init();
