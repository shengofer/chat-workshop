var View = require('./view.js');
var PS = require('../vendor/pubsub.js');

function UsersController() {

    var controller = {};

    PS.extend(controller);

    controller.view = View();

    controller.subscribe(CONST.APP.RENDER_LAYOUT, function() {
        controller.view.render();
        controller.publish(CONST.LAYOUT.RENDERED);
    });

    return controller;
}

module.exports = UsersController;