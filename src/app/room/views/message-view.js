var template = fs.readFileSync(__dirname + '/src/app/room/templates/message.mu', {encoding: 'utf-8'});
var View = require('./../../base/base-view.js');

var MessageView = function() {

    var view = View();

    view.parent = CONST.SEL.ROOM_MSGS;
    view.template = template;

    return view;
};

module.exports = MessageView;