var UsersOnline = function() {

    var usersOnline ={},
        _usersOnline = [];

    usersOnline.add = function(userId) {
        if (_usersOnline.filter(function(id) {
                return id === userId;
            }).length === 0) {
            _usersOnline.push(userId);
        }
        _usersOnline.push(userId);
    };

    usersOnline.remove = function(userId) {
        _usersOnline.splice(_usersOnline.indexOf(userId),1);
    };

    usersOnline.get = function() {
        return _usersOnline;
    };

    return usersOnline;
};

module.exports = UsersOnline;