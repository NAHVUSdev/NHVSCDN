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
app.get('/global.css', function (req, res) {
    "use strict";
    res.sendFile(path.join(__dirname + '/app/assets/global.css'));
});
app.get('/style.css', function (req, res) {
    "use strict";
    res.sendFile(path.join(__dirname + '/app/assets/style.css'));
});
app.get('/default.js', function (req, res) {
    "use strict";
    res.sendFile(path.join(__dirname + '/app/assets/default.js'));
});

app.listen(8080);
