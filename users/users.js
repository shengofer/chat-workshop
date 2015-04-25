var Users = (function() {
    var users;

    return function() {
        if (!users) {

            users = {};

            users.list = [];

            users.getAll = function() {

            };

            users.getLast = function() {
                return users.list[users.list.length-1];
            };

            users.add = function(userData) {
                users.list.push(userData);
            }
        }

        return users;
    }
}());

module.exports = Users;