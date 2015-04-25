var io = require('../vendor/socket.io.js');

var socket = io();

//what can it do
pubsub.extend(socket);

socket.on("user data", function(userData) {
    socket.publish('new user online', userData);
});

//when to do what
socket.on(CONST.SOCKET_SERVER.MSG_SENT, notifyAboutNewMessage);

socket.subscribe(CONST.APP.MSG_SUBMITTED, sendMessage);

function sendMessage(msg) {
    socket.emit(CONST.SOCKET_CLIENT.MSG_SENT, msg);
}

//how to do
function notifyAboutNewMessage(msg) {
    socket.publish(CONST.SOCKET_CLIENT.MSG_RECEIVED, msg);
}

module.exports = socket;