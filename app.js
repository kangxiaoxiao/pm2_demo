var http = require('http');
var fs=require("fs");
var staticPage=fs.readFileSync("./index.html")
http.createServer(function (request, response) {
    response.writeHead(200,
     {'Content-Type': 'text/html'}
     );
    response.end(staticPage);
}).listen(3000);       