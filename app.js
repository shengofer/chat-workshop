var express           =     require('express'),
    passport          =     require('passport'),
    util              =     require('util'),
    FacebookStrategy  =     require('passport-facebook').Strategy,
    session           =     require('express-session'),
    cookieParser      =     require('cookie-parser'),
    bodyParser        =     require('body-parser'),
    config            =     require('./configuration/config'),
    userModel         =     require('./model/user')
    app               =     express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var CONST = require('./public/app/const.js');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/dist/app.html');
});

app.use(express.static(__dirname));

http.listen(process.env.PORT || 8000, function(){
    console.log('listening on *:8000');
});

io.on('connection', function(socket){
    console.log('connected');

    socket.on(CONST.SOCKET_CLIENT.MSG_SENT, function(msg){
        console.log(msg);
        io.emit(CONST.SOCKET_SERVER.MSG_SENT, msg);
    });
});


// Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var user = {};
// Use the FacebookStrategy within Passport.

passport.use(new FacebookStrategy({
    clientID: config.facebook_api_key,
    clientSecret:config.facebook_api_secret ,
    callbackURL: config.callback_url
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
        user = new userModel(
            profile.displayName,
             email = null,
            id = profile.id
        );
      return done(null, profile);
    });
  }
));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'keyboard cat', key: 'sid'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    if(user.displayName){
        res.render('index', { user: req.user });
    }
    else {
        res.render('index', {user:undefined});
    }

});

app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

app.get('/auth/facebook', passport.authenticate('facebook',{scope:'email'}));


app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect : '/', failureRedirect: '/login' }),

  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

app.listen(3000);


io.on('connection', function(socket){
    console.log('connected');

    socket.on(CONST.SOCKET_CLIENT.MSG_SENT, function(msg){
        console.log(msg);
        io.emit(CONST.SOCKET_SERVER.MSG_SENT, msg);
    });
});