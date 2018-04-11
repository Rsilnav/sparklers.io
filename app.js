const express = require("express")
const app = express()
const http = require('http').Server(app);
const io = require("socket.io")(http)
var exports = module.exports = {};

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('index')
})

io.on('connection', function(socket) {
	//console.log('New user connected')

	socket.on("echo", function (msg, callback) {
        //callback = callback || function () {};
        socket.emit("echo", msg);
        //callback(null, "Done.");
    });

    socket.on("pingcheck", function(data) {
    	socket.emit("pongcheck", data);
    })
})

exports.server = http.listen(3000, function(){
  console.log('listening on *:3000');
});

exports.closeServer = function(){
  server.close();
};