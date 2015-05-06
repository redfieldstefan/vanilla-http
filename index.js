'use strict';

var server = require('./lib/server');
var router = require('./lib/router');
var requestHandlers = require('./lib/requestHandlers');

var handle = {};

handle["/"] = requestHandlers.start;
handle["/greet"] = requestHandlers.greet;
handle["/time"] = requestHandlers.time;

server.start(router.route, handle);