const express = require('express'),
      app     = express(),
      data    = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  let info = "";
  data.speakers.forEach((speaker) => {
    info += `
    <li>
        <h2>${speaker.name}</h2>
        <p>${speaker.summary}</p>
    </li>`
  })
  res.send(`
            <h1>Roux Academy Meetups</h1>
            ${info}
   `);
});

var server = app.listen(app.get('port'), function() {
  console.log(`Listening on port ${app.get('port')}`);
});

// var http = require('http');
//
// var myServer = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type" : "text/html"});
//   response.write('<h1>Roux Meetups</h1>');
//   response.end();
// });
//
// myServer.listen(3000);
// console.log('Go to http://localhost:3000 on your browser');
