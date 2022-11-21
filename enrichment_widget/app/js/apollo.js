var myHeaders = new Headers();
myHeaders.append("Cache-Control", "no-cache");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "GCLB=CNju87aTz5qrYg; X-CSRF-TOKEN=TFGSdQ3S9eFyc_LoSNSbFU6AFt9qSaejhA8DdJ8DF_2606y5jOIX0IceEVAJOFy8uconv_c65Trd91LtPq2nUQ; _leadgenie_session=qbQliDiouzEOpr3tdC7hYARaNr%2FTfXMVCUQVs8CGbPw%2BgMYr0nPbob0C%2Bx9pKw%2FD9PQwHT5rX3mD%2F05FYM6JBtEfSoON79snNXmQXRMQnWf5HtpSSbALXjHSqRtilP18bcPvxDTu6tkizIUGszOHtk2f90gCZaF6vwSvXM1SEsxWqRmg%2FE8DCLNZdRrbiYpKLICoirpLzdQomdyBfXbDHVHQPipbyg8nl8fIV9eevHjxPg6GzXmwsSmaHyCapzVcjZMW2J%2BfEvAsSwX%2BuE9nX4SPIaMFTqe%2BiF8%3D--UXzOVGMHyvAyEnnn--M2V44zDdrYTyXS5%2FK9Ci%2FQ%3D%3D");

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
  body: raw,
  redirect: 'follow'
};

fetch("https://api.apollo.io/v1/people/match", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));