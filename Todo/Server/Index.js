
var express = require('express'),
config = require('./config/config');  
var http = require("http");  

var app = express();    

require('./config/express')(app, config);

console.log("Creating HTTP server on port: " + config.port);
require('http').createServer(app).listen(config.port, function () {
console.log("HTTP Server listening on port:5000 " + config.port + ", in " + app.get('env') + " mode");
});



