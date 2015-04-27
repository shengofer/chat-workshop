var template = fs.readFileSync(__dirname + '/src/app/profile/templates/profile.mu', {encoding: 'utf-8'});
var View = require('../base/base-view.js');

function CreateUserOnlineListPlease() {

    var view = View();

    view.template = template;
    view.el = CONST.SEL.PROFILE;

    return view;
}

module.exports = CreateUserOnlineListPlease;