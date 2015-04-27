var View = require('../base/base-view.js');
var template = fs.readFileSync(__dirname + '/src/app/layout/templates/layout.mu', {encoding: 'utf-8'});

function UserOnline() {

    var view = View();

    view.template = template;
    view.el = CONST.SEL.PAGE;

    return view;
}

module.exports = UserOnline;