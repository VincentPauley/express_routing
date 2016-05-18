var express = require('express'),
    path = require('path'),
    app = express();

/* setup for app to use jade as the templating engine */
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: true });

/* Global username var */
var userName = 'Cool Guy';

/* GET request for index, root */
app.get('/', function(req, res) {
  res.render('index', {userName : userName});
});

/* GET request for profile page */
app.get('/profile', function(req, res) {
  res.render('profile', {userName: userName});
});

/* GET request for friends page, lol get some friends loser */
app.get('/friends', function(req, res) {
  // notice no args to send variables
  res.render('friends', {});
});

/* Tell da app which port to listen on */
app.listen(8080);
console.log('listening on 8080');
