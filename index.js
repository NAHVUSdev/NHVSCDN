var require;
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    "use strict";
    res.redirect('https://nahvus.com/');
});

// RESOURCES
app.get('/assets/global.css', function (req, res) {
    "use strict";
    res.sendFile('global.css', {root: path.join(__dirname, 'app/')});
});
app.get('/assets/style.css', function (req, res) {
    "use strict";
    res.sendFile('style.css', {root: path.join(__dirname, 'app/')});
});
app.get('/assets/default.js', function (req, res) {
    "use strict";
    res.sendFile('default.js', {root: path.join(__dirname, 'app/')});
});
app.get('/assets/script.js', function (req, res) {
    "use strict";
    res.sendFile('script.js', {root: path.join(__dirname, 'app/')});
});

app.listen(8080);
