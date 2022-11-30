let apolloArray = [];
let zohoArray = [];
let tableRowArray = [];

ZOHO.embeddedApp.on("PageLoad", function(data) {
    //documenation code might be slightly off so double check their code

    //setup variables for data manipulation


    ZOHO.CRM.UI.Resize({height:"1200",width:"1200"}).then(function(data){
    //console.log(data), just logs true because the window resizes.
    });

    //Entity is a context variable, 
    //it is passing values on page load to this code. It is allowing you access to specific data on load of the widget, these are for the module and record ID of the context of the button clicked prospect 
    var recordId = data.EntityId[0];
  
    var moduleName = data.Entity;
    //gotcha: We tried invoking and making straight JS calls but ran into CORS
    //workaround: send the request to a function in ZOHO (via the js sdk execute)that way the request works
    //the function in ZOHO is getapollo data, you do need to pass the record ID
    var func_name = "getapollodata";
    
    var req_data ={
        "id" : recordId
    };

    // the function call that return apollo data from the match service
    ZOHO.CRM.FUNCTIONS.execute(func_name, req_data)
    .then(function(data){
       // document.getElementById("recordInfo").innerHTML = JSON.stringify(data,null,2);
      
       var record = JSON.parse(data['details']['output']); // data['details']['output'];
       console.log(record);
       var size = Object.keys(record).length;
       if(size > 0){
       var rec_id = record.id;
       var allRecordData = record;
       apolloArray.push("Enriched Last Name",record.Last_Name);
       apolloArray.push("Enriched Orgranziation",record.First_Name);
       apolloArray.push("Enriched Email",record.Email);
       apolloArray.push("Enriched Company",record.Company);
       apolloArray.push("Enriched Organization",record.Organization);
      }
    });



    //the API call that returns prospect record data.
    ZOHO.CRM.API.getRecord({ Entity:moduleName, RecordID:recordId})
    .then(function (recordData) {
       var record = recordData.data[0];
       var rec_id = record.id;
       var allRecordData = record;
       zohoArray.push("Last Name",record.Last_Name)
       zohoArray.push("First Name",record.First_Name);
       zohoArray.push("Email",record.Email);
       zohoArray.push("Company",record.Company);
       zohoArray.push("Organization",record.Organization);
       });

       // Setup table display
       


        var config = {
            Entity:"Leads",
            APIData:{
                "id" : recordId
            }
        }
   

     processStuff();
     AddData();
});



ZOHO.embeddedApp.init();







function updateRecord() {
    var btnUpdate= document.getElementById("btnUpdate");

    btnUpdate.addEventListener("click", function (evt) {
         evt.preventDefault(); 
         var first_name = document.querySelector("[name=first_name]");
          console.log(first_name.value); 
          var last_name = document.querySelector("[name=last_name]");
          console.log(last_name.value); 
          var company = document.querySelector("[name=company]");
          console.log(company.value); 
          var organization = document.querySelector("[name=organization]");
          console.log(organization.value); 
          var email = document.querySelector("[name=email]");
          console.log(email.value); 
    });

}


function processStuff() {
    setTimeout(function() {

    for (var i = 0; i < zohoArray.length; i++) {

          tableRowArray.push(zohoArray[i]);
    }
    for (var j = 0; j < apolloArray.length; j++) {

        tableRowArray.push(apolloArray[j]);
    }
},2000);

}




function insert_Row()
{
    
    var rows = "";
    var fieldName = ""
    var zohoValue = "";
    var apolloValue = "";
   // <td>First Name</td><td>Zoho Data</td><td>Enriched Data</td><td> <input type="checkbox" name="first_name" id="first_name" value="Y"></td>

    rows += "<tr><td>"+ fieldName +"</td><td>" + zohoValue + "</td><td>" + apolloValue + "</td><td>" + city + "</td></tr>";

var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
}
    
