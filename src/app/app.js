//Global namespaces
window._D = require('./vendor/_D.js');
window.pubsub = require('./vendor/pubsub.js');
window.CONST = require('./const.js');
window.Mustache = require('mustache');

var io = require('./vendor/socket.io.js');
var socket = io();

window.addEventListener('load', function() {
    var initApp = require('./app-controller.js');



});