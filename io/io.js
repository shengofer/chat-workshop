var CONST = require('../src/app/const.js');
var Users = require('../users/users.js');

module.exports = function(http) {

    var users = Users();

    var io = require('socket.io')(http);

    io.on('connection', function(socket){

        var user = users.getLast();
console.log('hey!', user);
        io.emit('user data', user);

        socket.on(CONST.SOCKET_CLIENT.MSG_SENT, function(msg){
            console.log(msg);
            io.emit(CONST.SOCKET_SERVER.MSG_SENT, msg);
        });
    });

};