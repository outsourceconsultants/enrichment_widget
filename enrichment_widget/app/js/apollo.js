/*delete test data*/
var company = "";
var email = "";
var lastName = "";
var firstName = "";

myBody = {
    "api_key":"CimAYp3p4OegDg3MRj-MRA",
    "organization_name":company,
    "email":email,
    "last_name":lastName,
    "first_name":firstName,

}

(async() => {
const rawResponse = fetch('https://api.apollo.io/v1/people/match',{
    method: 'POST',
    body: myBody, // string or object
    headers: {
      'Cache-Control' :'no-cache',
      'Content-Type' : 'application/json',
    }
    
});
    const content = await rawResponse.json();

    console.log(content);
})();




