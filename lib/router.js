'use strict';

function route (handle, pathname, name, res, req) {
	console.log('About to route a request for ' + pathname);
	if(typeof handle[pathname] === 'function') {
		return handle[pathname](res, req, name);
	} else {
		console.log("No request handler found " + pathname);
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.write('404 Not found');
		res.end();
	}
}

exports.route = route;