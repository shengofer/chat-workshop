var fs = require('fs');
var View = require('./../base/base-view.js');
var template = fs.readFileSync(__dirname + '/src/app/auth/templates/login.mu', {encoding: 'utf-8'});

var AuthView = function() {
    var view = View();

    view.parent = CONST.SEL.PAGE;
    view.el = CONST.SEL.LOGIN;
    view.template = template;

    return view;
};

module.exports = AuthView;