ZOHO.embeddedApp.on("PageLoad", function(data) {
    // This is the information about the current record, if applicable.

var id = data.EntityId, module = data.Entity;

ZOHO.CRM.API.getRecord({Entity: module, RecordID:id})
.then(function(data){
    console.log(data);
});


});

ZOHO.embeddedApp.init();
