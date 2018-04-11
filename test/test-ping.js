var should = require('should')
var io = require('socket.io-client')

var socketURL = 'http://localhost:3000/'
	, client
	, server

var options ={
	transports: ['websocket'],
	forceNew: true
}

describe("Simpletesting server", function(){
	before(done => {
		server = require('../app').server
		done()
	})
	beforeEach(done => {
		client = io(socketURL, options)
		done()
	})
	afterEach(done => {
		client.disconnect();
		done()
	})
	after(done => {
		server.close()
		done()
	})
	it('Echo', function(done){
		client.on("connect", function () {
			client.on("echo", function (message) {
				message.should.equal("Hello World");
				done();
			});

			client.emit("echo", "Hello World");
		});
	})

	it('Ping Pong Check', function(done){
		client.on("connect", function () {
			client.on("pongcheck", function (message) {
				done();
			});

			client.emit("pingcheck");
		});
	})
})