var require;
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('app'));

app.get('/', function (req, res) {
    "use strict";
    res.redirect('https://nahvus.com/');
});

// RESOURCES
app.get('/logo.png', function (req, res) {
    "use strict";
    res.sendFile(path.join(__dirname + '/app/nahvusLogo.png'));
});
app.get('/global.css', function (req, res) {
    "use strict";
    res.sendFile(path.join(__dirname + '/app/global.css'));
});
app.get('/style.css', function (req, res) {
    "use strict";
    res.sendFile(path.join(__dirname + '/app/style.css'));
});
app.get('/default.js', function (req, res) {
    "use strict";
    res.sendFile(path.join(__dirname + '/app/default.js'));
});

app.listen(8080);
