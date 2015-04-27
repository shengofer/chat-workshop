var template = fs.readFileSync(__dirname + '/src/app/room/templates/room.mu', {encoding: 'utf-8'});
var View = require('./../../base/base-view.js');


var RoomView = function() {

    var view = View();

    view.parent = CONST.SEL.ROOMS_PARENT;
    view.el = CONST.SEL.ROOM;
    view.template = template;


    view.listen = function() {
        _D(CONST.SEL.ROOM_FORM).bind('submit', function(evt) {
            var input = _D('.room-form__input').elements[0];

            view.publish(CONST.ROOM.MSG_SUBMITTED, input.value);

            input.value = '';

            evt.preventDefault();
        }, false);
    };

    return view;
};

module.exports = RoomView;