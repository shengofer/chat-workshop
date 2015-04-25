/** user.js **/

var User = function (disName,email,id) {
    this.displayName = disName;
    this.email = email;
    this.id = id;
};



/*User.prototype.data = {}

User.prototype.changeName = function (name) {
    this.data.name = name;
}*/



module.exports = User;