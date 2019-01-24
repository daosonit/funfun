var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis = require('redis');

const CHANNEL_RELOAD_BOOKING = 'reload_booking'
server.listen(8890, '127.0.0.1');
console.log('server running at http://localhost:8890/')

var redisClient = redis.createClient();
redisClient.on('error', function (err) {
  console.log('Connect redis error: ' + err);
});

redisClient.on('connect', function() {
  console.log('Connected to Redis');
});

redisClient.subscribe(CHANNEL_RELOAD_BOOKING);

redisClient.on('message', function(channel, message) {
  // console.log("mew message in queue "+ message + " channel: " + channel);
  io.sockets.emit(channel, message);
});