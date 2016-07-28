'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.status(200);
	res.send('Hello World!');
});

var server = app.listen(process.env.PORT || '8080', function(){
	console.log("Server listening on port: " + server.address().port);
});