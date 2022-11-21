var myHeaders = new Headers();
myHeaders.append("Cache-Control", "no-cache");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "api_key": "CimAYp3p4OegDg3MRj-MRA",
  "first_name": "Tim",
  "last_name": "Zheng",
  "organization_name": "Apollo",
  "email": "name@domain.io",
  "domain": "apollo.io"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw
};

fetch("https://api.apollo.io/v1/people/match", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));