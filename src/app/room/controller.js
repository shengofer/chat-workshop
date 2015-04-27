var RoomView = require('./views/room-view.js');
var MsgView = require('./views/message-view.js');
var usersCollection = require('../storage/users-collection.js');
var PS = require('../vendor/pubsub.js');

function RoomController() {

    var controller = {};

    PS.extend(controller);

    controller.roomView = RoomView();
    controller.msgView = MsgView();

    controller.subscribe(CONST.APP.INIT_ROOM_CONTROLLER, function(){
        controller.roomView.append();
        controller.roomView.listen();
    });

    controller.subscribe(CONST.APP.MSG_RECEIVED, function(msg) {
        controller.msgView.append({
            body: msg.body,
            src: usersCollection.getIconById(msg.id)
        });
    });

    return controller;
}

module.exports = RoomController;