function ProfileModel() {
    var _model = {},
        model = {};

    model.set = function (name, src) {
        _model.name = name;
        _model.src = src;
    };

    model.get = function() {
        return _model;
    };

    return model;
}

module.exports = ProfileModel;