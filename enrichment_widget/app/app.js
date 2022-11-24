ZOHO.embeddedApp.on("PageLoad", function(data) {
    //documenation code might be slightly off so double check their code

    //setup variables for data manipulation
    var apolloArray = new Array();
    var zohoArray = new Array();
    var tableRowArray = new Array();
    var stringOutput = "";

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
       stringOutput = data[0];

       //var collectionString = RegExp('\"').stringOutput;

       //supply string to array values
      //apolloArray.push( collectionString.toArray(":"));
       
    //does return 
    //"{"apolloContactId":" ","apolloOrgId":"55693c317369642145391800","First_Name":"Patrick","Last_Name":"Toepel","Email":"ptoepel@outsource-consultants.com","Company":"OUTSOURCE CONSULTANTS, LLC"}"
    });
    console.log(stringOutput);

    //the API call that returns prospect record data.
    ZOHO.CRM.API.getRecord({ Entity:moduleName, RecordID:recordId})
    .then(function (recordData) {
        console.log(recordData);
        recordData.data[0].array.forEach(element => {
            console.log(element);
        });;
        /*
        "data":Array("1)
        0":"$approval":{
        "delegate":false,
        "approve":false,
        "reject":false,
        "resubmit":false
        }"$approval_state":"approved""$approved":"true
        $canvas_id":"null
        $converted":"false
        $converted_detail":{
        
        }"$currency_symbol":"$""$editable":"true
        $field_states":"null
        $in_merge":"false
        $orchestration":"false
        $pathfinder":"false
        $photo_id":"null
        $process_flow":"true
        $review":"null
        $review_process":{
        "approve":false,
        "reject":false,
        "resubmit":false
        }"$state":"save""$status":"cmv_9-8""AHT_in_seconds":"null
        Actual_Agents_Seats":"345
        Ad":"null
        AdGroup_Name":"null
        Ad_Campaign_Name":"null
        Ad_Click_Date":"null
        Ad_Network":"null
        Add_Drip_Status":"Automated Drip in Progress""Agents_Seats":"null
        Ages_Genders_of_Children":"null
        Agreement_Type":"null
        Annual_Revenue":"0
        Area_Desired":[
        "US"
        ]"Attending_Event":"null
        Average_Time_Spent_Minutes":"null
        Bad_Bounced_Email":"false
        Bad_Missing_Phone_Number":"false
        Begin_the_consulting_process":"null
        Bounced_in_Hubspot":"null
        Bulk_Email_Status":"Bad Email""Buy_Sell_Call_Center":"null
        Buy_Sell_Timeline":"null
        Call_Center_Ownership_Type":"null
        Call_Result_Email_Text":"null
        Call_Volume_Per_Month":"A: 100,000 +""Campaigns1":"null
        Can_Recieve_Gifts":"false
        Chat_Tool_Engagement":[
        "No Engagement"
        ]"Check_In_Call_Calendar_Link":"null
        City":"null
        Click_Type":"null
        Client_Account_Company":"null
        Client_CRM_System":"null
        Cold_Outreach_Blueprint":"null
        Cold_Outreach_Status":"null
        Cold_Outreach_Triggers":"null
        College_Attended":"null
        Common_No_Answer_Email_Notes":[
        
        ]"Company":"Outsource Consultants""Conferences_Attended":[
        
        ]"Consulting_project_length":"null
        Contact_Information_Sources":"null
        Contact_Role_Level":"Decision Maker""Conversion_Export_Status":"null
        Conversion_Exported_On":"null
        Converting_Prospect_Source":"null
        Cost_per_Click":"0
        Cost_per_Conversion":"0
        Country":"null
        Country_2":"null
        Created_By":{
        "name":"OC Admin",
        "id":"1190034000000068001",
        "email":"operations@outsource-consultants.com"
        }"Created_Time":"2014-07-01T16:48:03+00:00""Currency":"USD""Currently_Outsourcing":"null
        Date_of_Birth":"null
        Days_Visited":"null
        Decide_By_Date":"null
        Deferred_Contact_Date":"null
        Description":"null
        Designation":"null
        Desired_Price_Range":"null
        Device_Type":"null
        Discovery_Survey_Completed":"false
        Disqualification_Reason":"null
        Disqualified_Notes":"null
        Do_Not_Send_Marketing_Emails":"true
        Drip_Conversation_Outcome":"Ideal Qualified: had conversation, bought into process, but no Opportunity right now""Drip_Date":"null
        Drip_Ideal_Status":"null
        Drip_Source":"null
        Drip_Status":"null
        Drips_Count":"null
        Eligible_Round_Robin_Owner_Found_OC":"false
        Email":"null
        Email_2_Paragraph_2":"null
        Email_2_Paragraph_3":"null
        Email_2_Paragraphs":"null
        Email_2_Subject":"null
        Email_3_Paragraph_1":"null
        Email_3_Paragraph_2":"null
        Email_3_Paragraph_3":"null
        Email_3_Subject":"null
        Email_4_Paragraph_1":"null
        Email_4_Paragraph_3":"null
        Email_4_Subject":"null
        Email_Custom_Text":"null
        Email_Engagement":[
        "No Engagement"
        ]"Email_Opt_Out":"false
        Email_Round_Robin_Owner_OC":"false
        Enrich_Status__s":"null
        Event_Attending":"null
        Exchange_Rate":"1
        Favorite_Drink":"null
        Favorite_Sports_Teams":"null
        First_Conversion_Page":"null
        First_Name":"Corey""First_Name_for_HS":"Corey""First_Visited_Time":"null
        First_Visited_URL":"null
        Follow_Up_Email_Text":"null
        Follow_Up_Method":"No Follow-Up""From_Referral_Partner_Portal":"false
        Full_Name":"Corey Kotlarz""GCLID":"null
        Go_Live_Date":"null
        Had_Discussion_at_Show":[
        
        ]"Has_Duplicate":"false
        Hobbies_Interests":"null
        Home_Mailing_Country_2":"null
        Hours_to_Outsource":"null
        Hubspot_Contact_ID":"null
        Ideal_Outreach":"null
        Ideal_Prospect":"false
        Ideal_Qualified":"false
        Ideal_Qualified_Approved":"null
        Ideal_Qualified_Submitted":"null
        Ideal_Status":[
        
        ]"In_Person_Engagement":[
        "No Engagement"
        ]"Inbound_Outbound":"Inbound""Industry":"null
        Industry_Outreach_Status":"null
        Info_About_Children_Grandchildren":"null
        Initial_Seats":"null
        Inside_Referrer":"null
        Key_Issues":"null
        Key_KPIs":"null
        Key_Requirements":"null
        Keyword":"null
        Languages_Needed":"null
        Last_Activity_Time":"2022-11-23T19:47:54+00:00""Last_Discussion_Date":"null
        Last_Enriched_Time__s":"null
        Last_Name":"Kotlarz""Last_Visited_Time":"null
        Layout":{
        "name":"Standard",
        "id":"1190034000004125065"
        }"Lead_Mag":"null
        Lead_Score":"null
        Lead_Source":"Corey's Past Contacts""Lead_Status":"Ideal Qualified""Leads_Conversion_Prediction":"Pre Qualified""Leads_Conversion_Prediction_Score":"45
        LinkedIn_Connection_Status":"null
        LinkedIn_Message":[
        "No Engagement"
        ]"LinkedIn_profile_URL":"null
        Mailing_City":"null
        Mailing_Country":"null
        Mailing_State":"null
        Mailing_Street":"null
        Mailing_Street_2":"null
        Mailing_Zip_Code":"null
        Marital_Status":"null
        Mark_as_Disqualified":"false
        Master_Agent":"null
        Mobile":"null
        Modified_By":{
        "name":"Nate Lein",
        "id":"1190034000015758007",
        "email":"nlein@outsource-consultants.com"
        }"Modified_Time":"2022-11-23T19:47:54+00:00""Most_Recent_Activity_Date":"null
        NDA_Agreement_Link":"null
        NDA_Agreement_Type":"null
        NDA_Date_Executed":"null
        NDA_Date_Sent":"null
        NEW_Number_of_Outsourced_Agents":"null
        New_Drip_Status":"null
        New_Prospect_Status":"null
        Next_Step":"Attempt Call 1""NoAnswer1_Text":"null
        No_of_Employees":"0
        Number_Of_Chats":"null
        Number_of_Outreaches_Completed":"null
        On_OC_Newsletter_Mailing_List":"null
        Outreach_Channel":[
        
        ]"Outreach_Industry":"null
        Outsourcing_Strategy_Health_Check_Calendar_Link":"null
        Outsourcing_Timeline":"null
        Owner":{
        "name":"Nate Lein",
        "id":"1190034000015758007",
        "email":"nlein@outsource-consultants.com"
        }"Partner_Company":"null
        Pets":"null
        Phone":"null
        Phone_Engagement":[
        "Attempted"
        ]"Phone_System_Telephony":"null
        Planning_on_Attending":[
        
        ]"Pricing_Calc_Communication":null
        */
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

function checkBox(oCheckbox)
{
    var checkbox_val = oCheckbox.value;
    if (oCheckbox.checked == true)
    {
        alert("Checkbox with name = " + oCheckbox.name + " and value =" +
                checkbox_val + " is checked");
    }
    else
    {
        alert("Checkbox with name = " + oCheckbox.name + " and value =" +
              checkbox_val + " is not checked");
    }
}








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
        



    var config = {
        Entity:"Leads",
        APIData:{
            "id" : recordId
        }
    
