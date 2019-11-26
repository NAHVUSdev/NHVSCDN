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
app.get('/favicon.ico', function (req, res) {
    "use strict";
    res.sendFile(path.join(__dirname + '/app/favicon.ico'));
});

var require;
var express = require('express');
var app = express();
var path = require('path');

app.get('/:name', function (req, res, next) {
    var options = {
        root: path.join(__dirname, 'app')
    }

    var fileName = req.params.name
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
});

app.listen(8080);


app.listen(8080);
