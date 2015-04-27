var CONST = require('../src/app/const.js');
var usersOnline = require('../collections/users-online.js')();
var passports = require('../collections/passports.js')();

var IO = function(http) {

    var io = require('socket.io')(http);

    io.on('connection', function(socket){

        socket.on(CONST.SOCKET_CLIENT.LOGGED_IN, function(passport) {
            usersOnline.add(passport.id);
            passports.add(passport);

            io.emit(CONST.SOCKET_SERVER.NEW_USER_ONLINE, passport);

            //test
            setTimeout(function() {
                io.emit(CONST.SOCKET_SERVER.NEW_USER_ONLINE, {
                    id: '43252346',
                    firstName: 'Bender',
                    lastName: 'Rodrigez',
                    icon: 'http://vignette3.wikia.nocookie.net/en.futurama/images/7/70/BenderTheOffender.jpg/revision/latest?cb=20110614181253',
                    picture: 'http://vignette3.wikia.nocookie.net/en.futurama/images/7/70/BenderTheOffender.jpg/revision/latest?cb=20110614181253'
                });
            }, 2000);
        });

        socket.on(CONST.SOCKET_CLIENT.MSG_SENT, function(msg){
            io.emit(CONST.SOCKET_SERVER.MSG_SENT, msg);
        });

    });

    return io;
};

module.exports = IO;