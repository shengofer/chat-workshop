var View = require('./view.js');
var Model = require('./model.js');
var PS = require('../vendor/pubsub.js');

function UsersController() {

    var controller = {};

    PS.extend(controller);

    controller.view = View();
    controller.model = Model();

    controller.subscribe(CONST.APP.NEW_USER_ONLINE, function(passport) {
        controller.model.set(passport.firstName, passport.icon);

        controller.view.append( controller.model.get() );
    });

    return controller;
}

module.exports = UsersController;