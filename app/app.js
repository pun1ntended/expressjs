const express = require('express'),
      app     = express();

app.get('/', (req, res) => {
  res.send('<h1>Roux Academy Meetups</h1>');
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
})

//HTTP Version
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

