var UsersController = require('./users/controller.js');

function InitAppController() {

    var API = require('./API/socket-controller.js');

    var app = {};

    pubsub.extend(app);

    var usersController = UsersController();

    app.subscribe('new user online', function(userData) {
        app.publish('update users list', userData);
    });


    return app;



}

module.exports = InitAppController;

