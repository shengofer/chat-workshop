var express           =     require('express'),
    app               =     express(),
    http = require('http').Server(app),
    io = require('./io/io.js')(http);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
        res.render('index');
});

http.listen(process.env.PORT || 3000, function(){
    console.log('listening on *:3000');
});