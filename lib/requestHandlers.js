'use strict';

var querystring = require('querystring');
var fs = require('fs');

function start(res, req) {
	console.log('Request handler "start" was called');
	var body = JSON.stringify({'Status': 'youre at the base'});
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(body);
	res.end();
}

function greet(res, req, name) {
	console.log('Request handler "greet" was called');
	if(req.method === 'POST') {
			res.writeHead(200, {'Content-Type': 'application/json'});
			console.log("POST HAS BEEN HIT");
			req.on('data', function(data){
				var body;
				body = JSON.parse(data.toString('utf-8'));
				res.write(JSON.stringify({msg: 'hello ' + body.name}));
				res.end();
			});
		
	} else {
		var body = "hello " + name;
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify({msg: body}));
		res.end();
	}
	
}

function time(res, req) {
	
	console.log('Request handler "time" was called');
	var day = new Date();
	var currentTime = 'hour: ' + day.getHours() + ' Minutes: ' + day.getMinutes() ;
	var body = JSON.stringify({msg : currentTime});
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(body);
	res.end();
}

exports.start = start;
exports.greet = greet;
exports.time = time;
