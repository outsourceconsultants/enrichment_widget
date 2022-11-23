ZOHO.embeddedApp.on("PageLoad", function(data) {
    //documenation code might be slightly off so double check their code

    //setup variables for data manipulation
    var apolloArray = new Array();
    var zohoArray = new Array();

    ZOHO.CRM.UI.Resize({height:"1200",width:"1200"}).then(function(data){
    //console.log(data), just logs true because the window resizes.
    });

    //Entity is a context variable, 
    //it is passing values on page load to this code. It is allowing you access to specific data on load of the widget, these are for the module and record ID of the context of the button clicked prospect 
    var recordId = data.EntityId[0];
  
    var moduleName = data.Entity;
    console.log(moduleName);
    //gotcha: We tried invoking and making straight JS calls but ran into CORS
    //workaround: send the request to a function in ZOHO (via the js sdk execute)that way the request works
    //the function in ZOHO is getapollo data, you do need to pass the record ID
    var func_name = "apollo_enrichment";
    
    var req_data ={
        "id" : recordId
    };

    // the function call that return apollo data from the match service
    ZOHO.CRM.FUNCTIONS.execute(func_name, req_data)
    .then(function(data){
        data[0].details.array.forEach(element => {
            apolloArray.push(element);
        });
       
    //does return 
    //"{"apolloContactId":" ","apolloOrgId":"55693c317369642145391800","First_Name":"Patrick","Last_Name":"Toepel","Email":"ptoepel@outsource-consultants.com","Company":"OUTSOURCE CONSULTANTS, LLC"}"
    });
    console.log(apolloArray);
    console.log(moduleName);
    //the API call that returns prospect record data.
    ZOHO.CRM.API.getRecord({ moduleName, recordId})
    .then(function (recordData) {
        console.log(recordData);
        zohoArray.push(recordData);
    // This is the information about the current record, if applicable.
    });
    console.log(zohoArray);
    /*
    ZOHO.CRM.UI.Record.edit({Entity:"Leads",RecordID:"1000000036062"})
    then(function(data){
    console.log(data)
    })
    */









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
