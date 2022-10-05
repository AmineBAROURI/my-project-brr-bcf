

// Question 1
/*
// Import a module
const http = require('http')

// Declare an http server
http.createServer(function (req, res) {

  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Write a response content
  res.end('Hello world\n');

// Start the server
}).listen(8080)
*/

// Question 3
/*
const http = require('http')
const serverHandle = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}

const server = http.createServer(serverHandle);
server.listen(8080)
*/

// Question 4
/*
const http = require('http')
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' +
'    <body>' +
'       <p> Voila le projet à BAROURI Amine et BOUCIOUF Samy</p>' +
'       <p> On la nommer my project brr bcf</p>' +
'    </body>' +
'</html>'

const serverHandle = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}
const server = http.createServer(serverHandle);
server.listen(8080)
*/

// Question 5
/*
const http = require('http')

const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' +
'    <body>' +
'       <p> Voila le projet à BAROURI Amine et BOUCIOUF Samy</p>' +
'       <p> On la nommer my project brr bcf </p>' +
'    </body>' +
'</html>'



const url = require('url')
const serverHandle = function (req, res) {
  // Retrieve and print the current path
  const path = url.parse(req.url).pathname;
  console.log(path);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(path);
  res.end();
}

const server = http.createServer(serverHandle);
server.listen(8080)
*/

// Question 6
/*
const http = require('http')

const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' +
'    <body>' +
'       <p> Voila le projet à BAROURI Amine et BOUCIOUF Samy</p>' +
'       <p> On la nommer my project brr bcf </p>' +
'    </body>' +
'</html>'



const url = require('url')
const qs = require('querystring')

const serverHandle = function (req, res) {
  // Retrieve and print the queryParams
  const queryParams = qs.parse(url.parse(req.url).query);
  console.log(queryParams);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}

const server = http.createServer(serverHandle);
server.listen(8080)
*/

// Question 7
/*
const http = require('http')

const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' +
'    <body>' +
'       <p> Voila le projet à BAROURI Amine et BOUCIOUF Samy</p>' +
'       <p> On la nommer my project brr bcf </p>' +
'    </body>' +
'</html>'



const url = require('url')
const qs = require('querystring')

const serverHandle = function (req, res) {
  const route = url.parse(req.url)
  const path = route.pathname
  const params = qs.parse(route.query)

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (path === '/hello' && 'name' in params) {
    res.write('Hello ' + params['name'])
  } else {
    res.write('Hello anonymous')
  }

  res.end();
}

const server = http.createServer(serverHandle);
server.listen(8080)
*/

// Question 8
// ./index.js
const http = require('http')
const handles = require('./handles')
const server = http.createServer(handles.serverHandle);
server.listen(8080)
