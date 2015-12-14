// Lets require/import the HTTP module
const http = require('http');
const url = require('url');
const swig = require('swig');

// Lets define a port we want to listen to
const PORT = process.env.PORT || 3000;

// We need a function which handles requests and send response
function handleRequest (req, res) {
  const query = url.parse(req.url, true).query;

  res.end(swig.renderFile('template.xml', {
    id: query.id
  }));
}

// Create a server
var server = http.createServer(handleRequest);

// Lets start our server
server.listen(PORT, function () {
  // Callback triggered when server is successfully listening. Hurray!
  console.log('Server listening on: http://localhost:%s', PORT);
});
