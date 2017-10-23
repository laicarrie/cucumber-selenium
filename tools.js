let express = require('express')

let app = express()

app.get('/tools.html', function(req, res) {

  res.sendFile(`${__dirname}/tools/index.html`);

});

app.get('/tools.json', function(req, res) {

  res.sendFile(`${__dirname}/tools/stepList.json`);

});

app.get('/readme.md', function(req, res) {

  res.sendFile(`${__dirname}/README.md`);

});


app.listen(1234)
