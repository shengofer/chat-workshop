var PS = require('../vendor/pubsub.js');

function fbAPI() {

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    var fbapi = {};

    PS.extend(fbapi);

    // This is called with the results from from FB.getLoginStatus().
    fbapi.statusChangeCallback = function(response) {
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            document.getElementById('status').innerHTML = 'wait for it...';
            fbapi.publish(CONST.FB.LOGGED);

        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.

        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.

        }
    };

    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    window.checkLoginState = function () {
        FB.getLoginStatus(function(response) {
            fbapi.statusChangeCallback(response);
        });
    };

    window.fbAsyncInit = function() {
        FB.init({
            appId      : '1580275722248737',
            cookie     : true,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.2' // use version 2.2
        });

        FB.getLoginStatus(function(response) {
            fbapi.statusChangeCallback(response);
        });

    };

    return fbapi;
}

module.exports = fbAPI();