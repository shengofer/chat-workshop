var Passport = function() {

    var passport ={},
        _passport = {};

    passport.set = function(userData) {
        for (var n in userData) {
            if (userData.hasOwnProperty(n)) {
                _passport[n] = userData[n];
            }
        }
    };

    passport.getId = function() {
        return _passport.id;
    };

    passport.getName = function() {
        return _passport.firstName + ' ' + _passport.lastName;
    };

    passport.getIcon = function() {
        return _passport.icon;
    };

    passport.getPicture = function() {
        return _passport.picture;
    };

    passport.getUserData = function() {
        return _passport;
    };

    return passport;
};

module.exports = Passport;