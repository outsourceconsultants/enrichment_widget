/*
Copyright (c) 2017, ZOHO CORPORATION
License: MIT
*/
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var morgan = require('morgan');
var serveIndex = require('serve-index');
var https = require('https');
var chalk = require('chalk');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const api_url ="https://api.apollo.io/v1/people/match";
process.env.PWD = process.env.PWD || process.cwd();

const enrichedProspects = new Array();

var expressApp = express();
var port = 5000;
expressApp.set('port', port);
expressApp.use(morgan('dev'));
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: false }));


expressApp.use(errorHandler());


expressApp.get('/plugin-manifest.json', function (req, res) {
  res.sendfile('plugin-manifest.json');
});

expressApp.use('/app', express.static('app'));
expressApp.use('/app', serveIndex('app'));
expressApp.use(express.static(path.join(__dirname, 'public')))

expressApp.get('/',function(req,res){

redirect('/app');
});


var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, expressApp).listen(port, function () {
  console.log(chalk.green('Zet running at ht' + 'tps://127.0.0.1:' + port));
  console.log(chalk.bold.cyan("Note: Please enable the host (https://127.0.0.1:"+port+") in a new tab and authorize the connection by clicking Advanced->Proceed to 127.0.0.1 (unsafe)."));
}).on('error', function (err) {
  if (err.code === 'EADDRINUSE') {
    console.log(chalk.bold.red(port + " port is already in use"));
  }
});



/*
async function getEnrichedData() {

  const data = {
      api_key: "CimAYp3p4OegDg3MRj-MRA",
      first_name: "Tim",
      last_name: "Zheng",
      organization_name: "Apollo",
      email: "name@domain.io",
      domain: "apollo.io"
  };

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", api_url, true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("Cache-Control", "no-cache");

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      const rawApolloData = JSON.parse(xhttp.responseText);
      console.log(rawApolloData);
      rawApolloData.person.forEach(element => {
        enrichedProspects.push({"id": element.id,"name": element.name});
        console.log(element.id);
      });
      console.log(enrichedProspects);


      

           
      
    }
    var final = JSON.stringify(enrichedProspects);
     
    fs.writeFile('./app/person.json', final, err => {
      if (err) {
        console.error(err);
      }
    });
    
  }
  xhttp.send(JSON.stringify());
}
getEnrichedData();
*/