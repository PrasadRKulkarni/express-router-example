var express = require('express');
var router = express.Router();

router.use('/api', require('./api-route.js'))

router.get('/test', function (req, res) {
    res.send('Hello from Router file !!!');
});

module.exports = router;