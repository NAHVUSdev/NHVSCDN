/* NO LONGER MAINTAINED */
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('app'));

app.get('/', function (req, res) {
    "use strict";
    res.redirect('https://nahvus.com/');
});

// RESOURCES
app.get('/logo.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/img/nahvusLogo.png'));
});
app.get('/global.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/global.css'));
});
app.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/style.css'));
});
app.get('/default.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/default.js'));
});
app.get('/favicon.ico', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/img/favicon.ico'));
});
app.listen(8080);
