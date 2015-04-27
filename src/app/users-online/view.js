var View = require('../base/base-view.js');
var template = fs.readFileSync(__dirname + '/src/app/users-online/templates/user-li.mu', {encoding: 'utf-8'});

function UserOnline() {

    var view = View();

    view.template = template;
    view.parent = CONST.SEL.USERS_ONLINE;

    return view;
}

module.exports = UserOnline;