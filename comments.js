// Create web server   
// Create a web server that listens for incoming requests on port 3000. When a request is received, the server should respond with the following: 
// A status code of 200
// A Content-Type of application/json
// A response body with the following JSON object:
// { "message": "Hello, you sent a request to the web server" }
// The server should only respond to requests made to the /comments endpoint. All other requests should be responded to with a 404 status code and an empty response body.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, you sent a request to the web server' }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('The server is listening on port 3000!');
});