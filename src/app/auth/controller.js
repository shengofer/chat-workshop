var createLoginView = require('./view.js');
var PS = require('../vendor/pubsub.js');

var Auth = function() {
    var auth = {};

    PS.extend(auth);

    auth.view = createLoginView();

    auth.subscribe(CONST.APP.AUTH, function(){
        auth.view.append();
    });

    auth.subscribe(CONST.FB.LOGGED,  function getUserData() {

        FB.api("/me", {fields: 'id, first_name, last_name, picture'},  function(response) {
            PASSPORT.set({
                id: response.id,
                firstName: response.first_name,
                lastName: response.last_name,
                icon: response.picture.data.url
            });

            if (PASSPORT.getUserData().picture) {
                PS.publish(CONST.AUTH.LOGGED);
            }
        });

        FB.api("/me/picture?width=199&height=199",  function(response) {
            PASSPORT.set({
                picture: response.data.url
            });

            if (PASSPORT.getUserData().firstName) {
                PS.publish(CONST.AUTH.LOGGED);
            }

            auth.view.remove();
        });

    });

    return auth;
};

module.exports = Auth;