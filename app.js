var express = require('express');
var app = express();
//var router = require('routes.js');

app.get('/Home', function (req, res) {
    res.send('Hello from <b>app.js</b> file !!!');
});

//Import Routes.JS file routes
app.use(require('./routes.js'));

app.listen(8080, function () {
    console.log('Server is listening to port : 8080');
});

