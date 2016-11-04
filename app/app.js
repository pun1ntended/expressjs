const http = require('http');

const myServer = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write('Roux Meetups');
  res.end();
});
myServer.listen(3000);
console.log("Server listening on port 3000");