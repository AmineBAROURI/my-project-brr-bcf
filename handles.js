// ./handles.js
// Necessary imports
module.exports = {
  serverHandle: function (req, res) {
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


}


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



const server = http.createServer(serverHandle);
server.listen(8080)
