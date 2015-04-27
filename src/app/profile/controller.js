var View = require('./view.js');
var Model = require('./model.js');
var PS = require('../vendor/pubsub.js');

function UsersController() {

    var controller = {};

    PS.extend(controller);

    controller.view = View();
    controller.model = Model();

    controller.subscribe(CONST.APP.LOGGED, function() {
        controller.model.set(PASSPORT.getName(),PASSPORT.getPicture());

        controller.view.render( controller.model.get() );
    });

    return controller;
}

module.exports = UsersController;