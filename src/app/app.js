//Global namespaces
window._D = require('./vendor/_D.js');
window.CONST = require('./const.js');
window.Mustache = require('mustache');
window.PASSPORT = require('./auth/passport.js')();

require('./API/fbAPI.js');

window.addEventListener('load', function() {

    var initApp = require('./app-controller.js');

    initApp();

});