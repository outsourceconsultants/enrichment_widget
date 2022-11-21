

    var payload = 
        {
            "api_key": "CimAYp3p4OegDg3MRj-MRA",
            "first_name": "Tim",
            "last_name": "Zheng",
            "email": "name@domain.io",
            "domain": "apollo.io"
        }
    


  fetch('https://api.apollo.io/v1/people/match', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({payload})
  }).then(res => res.json())
    .then(res => console.log(res));