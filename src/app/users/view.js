var View = require('../base/view-base.js');

function CreateUserOnlineListPlease() {

    var view = View();

    view.el = document.getElementById('usersOnline');

    view.addUser = function(userData) {
        view.el.appendChild(_D('li').put(userData.displayName).elements[0]);
    };

    return view;

}

module.exports = CreateUserOnlineListPlease;