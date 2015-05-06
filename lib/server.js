'use strict';

var http = require('http');
var url = require('url');
var port = 3000;


function start(route, handle) {
	function onRequest(req, res) {
		var postData = '';
		var pathname = url.parse(req.url).pathname;
		console.log('this is pathname: ' + pathname);	
		var name;
		var pathArray = pathname.split('/');
		console.log('this is patharray: ');
		console.dir(pathArray);

		if(pathname === '/') {
			pathname = '/';
		}

		else if(pathArray.length > 2) {
			pathname = '/' + pathArray[1];
			name = pathArray[2];
			console.log('this is pathname in elseif: ' + pathname);
		}
		else {
			pathname = '/' + pathArray[1];
		}

		console.log('this is pathname now: ' + pathname);

		console.log('Request for ' + pathname + ' recieved at port ' + port);
		route(handle, pathname, name, res, req);
	}

	http.createServer(onRequest).listen(port);
	console.log('Server has started on port ' + port);
}

exports.start = start;

























// var server = http.createServer(function (req, res) {

// 	var pathname = url.parse(req.url).pathname;
// 	console.log('Request for ' + pathname + ' recieved at port ' + port);
// 	route(handle, pathname, res, req);

// 	// if (req.url === '/greet'){
		

// 	// }

// 	// } else if (req.url === '/time') {
// 	// 	res.writeHead(200, {'Content-Type': 'application/json'});
// 	// 	var currentTime = Date.now();
// 	// 	res.write(JSON.stringify({'the current time is ' : currentTime}));
// 	// 	return res.end();
// 	// }

// 	// else {
// 	// 	res.writeHead(404, {'Content-Type':'application/json'});
// 	// 	res.write(JSON.stringify({msg: 'could not find page'}));
// 	// 	res.end();
// 	// }
// });

// server.listen(port, function(){
// 	console.log('Server started on port ' + port);
// });