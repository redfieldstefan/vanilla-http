'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);
require('../lib/server');

describe('server', function(){

	it('should respond to a get request', function(done) {
		chai.request('localhost:3000')
			.get('/greet/name')
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res.body.msg).to.eql('hello name');
				expect(res.status).to.eql(200);
				done();
			});
	});

	it('should respond to a post request', function(done) {
		chai.request('localhost:3000/greet')
			.post('/greet')
			.send({name: "name"})
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res.body.msg).to.eql('hello name');
				expect(res.status).to.eql(200);
				done();
			});
	});

	it('should show the time', function(done) {
		var date = new Date();
		chai.request('localhost:3000')
			.get('/time')
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res.body.msg).to.eql('hour: ' + date.getHours() + ' Minutes: ' + date.getMinutes());
				expect(res.status).to.eql(200);
				done();
			});
	});

});


