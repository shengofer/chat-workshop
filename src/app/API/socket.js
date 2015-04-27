var io = require('../vendor/socket.io.js');
var usersCollection = require('../storage/users-collection.js');
var PS = require('../vendor/pubsub.js');

function Socket() {

    var socket = io();

    PS.extend(socket);

    socket.subscribe(CONST.APP.LOGGED, function() {
        socket.emit(CONST.SOCKET_CLIENT.LOGGED_IN, PASSPORT.getUserData());
    });

    socket.subscribe(CONST.APP.MSG_SUBMITTED, function(msg) {
        socket.emit(CONST.SOCKET_CLIENT.MSG_SENT, {
            id: PASSPORT.getId(),
            body: msg
        });
    });

    socket.on(CONST.SOCKET_SERVER.NEW_USER_ONLINE, function(passport) {
        usersCollection.add(passport);

        socket.publish(CONST.SOCKET_CLIENT.NEW_USER_ONLINE, passport);
    });

    socket.on(CONST.SOCKET_SERVER.MSG_SENT, function(msg) {
        socket.publish(CONST.SOCKET_CLIENT.MSG_RECEIVED, msg);
    });

    return socket;
}



module.exports = Socket();