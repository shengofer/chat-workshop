var UsersCollection = function() {
    var collection ={},
        _collection = [];

    collection.add = function(userId) {
        if (_collection.filter(function(id) {
                return id === userId;
            }).length === 0) {
            _collection.push(userId);
        }
        _collection.push(userId);
    };

    collection.remove = function(userId) {
        _collection.splice(_collection.indexOf(userId),1);
    };

    collection.get = function() {
        return _collection;
    };

    collection.getIconById = function (userId) {
        return _collection.filter( function(user) {
            return user.id === userId;
        })[0].icon;
    };

    return collection;
};

module.exports = UsersCollection();