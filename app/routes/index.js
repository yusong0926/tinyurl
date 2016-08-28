/**
 * Created by soyu on 2016-08-28.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.sendfile('./public/views/index.html');
});

module.exports = router;