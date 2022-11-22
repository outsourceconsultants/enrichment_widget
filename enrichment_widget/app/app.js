ZOHO.embeddedApp.on("PageLoad", function(data) {
    ZOHO.CRM.UI.Resize({height:"1200",width:"1200"}).then(function(data){
        console.log(data);
    });
    var api_url = "https://api.apollo.io/v1/people/match";



    



var id = data.EntityId, module = data.Entity;

ZOHO.CRM.API.getRecord({Entity: module, RecordID:id})
.then(function(data){
    recordData = recordData.data[0];




    console.log(recordData);

    // This is the information about the current record, if applicable.


    var data ={
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



});


});




ZOHO.embeddedApp.init();
