/*delete test data*/
var company = "Apollo";
var email = "name@domain.io";
var lastName = "Zheng";
var firstName = "Tim";
var domain = "apollo.io";

/*
{
    "api_key": "CimAYp3p4OegDg3MRj-MRA",
    "first_name": "Tim",
    "last_name": "Zheng",
    "organization_name": "Apollo",
    "email": "name@domain.io",
    "domain": "apollo.io"
}
*/
myBody = {
    "api_key":"CimAYp3p4OegDg3MRj-MRA",
    "organization_name":company,
    "email":email,
    "last_name":lastName,
    "first_name":firstName,
    "domain": domain

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




