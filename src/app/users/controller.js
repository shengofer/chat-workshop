var View = require('./view.js');

function UsersController() {

    var controller = {};

    pubsub.extend(controller);

    controller.view = View();

    controller.subscribe('update users list', function(userData) {
        console.log('user controller get ', userData);
        controller.view.addUser(userData);
    });

    return controller;

}

module.exports = UsersController;