var PassportsCollection = function() {

    var  passports = {},
        _passports = [];

    passports.add = function(passport) {
        if (_passports.filter(function(psprt) {
                return passport.id === psprt.id;
            }).length === 0) {
            _passports.push(passport);
        }
    };

    passports.getById = function(userId) {
        return _passports.filter(function(passport) {
            return passport.id = userId;
        })[0];
    };

    passports.getIconById = function(userId) {
        return _passports.filter(function(passport) {
            return passport.id = userId;
        })[0].icon;
    };

    return passports;
};

module.exports = PassportsCollection;