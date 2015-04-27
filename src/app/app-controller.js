var UsersOnline = require('./users-online/controller.js');
var RoomController = require('./room/controller.js');
var ProfileController = require('./profile/controller.js');
var Auth = require('./auth/controller.js');
var Layout = require('./layout/controller.js');
var PS = require('./vendor/pubsub.js');
function InitAppController() {

    //init socket
    require('./API/socket.js');

    var app = {};

    PS.extend(app);

    var auth = Auth();

    app.publish(CONST.APP.AUTH);

    app.subscribe(CONST.AUTH.LOGGED, function() {
        Layout();

        app.publish(CONST.APP.RENDER_LAYOUT);
    });

    app.subscribe(CONST.LAYOUT.RENDERED, function() {
        UsersOnline();
        RoomController();
        ProfileController();

        app.publish(CONST.APP.INIT_ROOM_CONTROLLER);

        app.publish(CONST.APP.LOGGED);
    });

    app.subscribe(CONST.ROOM.MSG_SUBMITTED, function(msg) {
        app.publish(CONST.APP.MSG_SUBMITTED, msg);
    });

    app.subscribe(CONST.SOCKET_CLIENT.MSG_RECEIVED, function(msg) {
        app.publish(CONST.APP.MSG_RECEIVED, msg);
    });

    app.subscribe(CONST.SOCKET_CLIENT.NEW_USER_ONLINE, function(passport) {
        app.publish(CONST.APP.NEW_USER_ONLINE, passport);
    });

    return app;
}

module.exports = InitAppController;

