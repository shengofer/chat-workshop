var PS = require('../vendor/pubsub.js');

function BaseView() {
    var view = {};

    PS.extend(view);

    view.render =  function (model) {
        _D(view.el).put(Mustache.to_html(view.template, model));
    };

    view.append = function(model) {
        _D(view.parent).add(Mustache.to_html(view.template, model));
    };

    view.remove = function() {
        _D(view.el).del();
    };

    return view;
}

module.exports = BaseView;