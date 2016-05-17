var express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs');

/* setup routes */
var index = __dirname + '/views/index.html',
    profile = __dirname + '/views/profile.html';

/* When user requests the homepage via a get requests */
app.get('/', function(req, res) {
  // read index.html from the file system and pipe the response back to the client
  fs.createReadStream(index).pipe(res);
});

/* When user requests profile page */
app.get('/profile', function(req, res){
  fs.createReadStream(profile).pipe(res);
});

/* port stuff */
app.listen(8080);
console.log('listening on port 8080');
