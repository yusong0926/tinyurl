/**
 * Created by soyu on 2016-08-27.
 */
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var urlService = require('../services/urlService');
var statsService = require('../services/statsService');
var userService = require('../services/userService');

//user creates a shortUrl, insert a url record to database(shortUrl, longUrl, username)
//return a json (shorturl, longUrl)
router.post('/urls', jsonParser, function (req, res) {
    var longUrl = req.body.longUrl;
    var username = req.body.username;
    urlService.getShortUrl(longUrl, username, function(url) {
        res.json(url);
    });
});

//request a shortUrl longUrl json
router.get("/urls/:shortUrl", function (req, res) {
    var shortUrl = req.params.shortUrl;
    urlService.getLongUrl(shortUrl, function(url) {
        if(url) {
            res.json(url);
        } else {
            res.status(404).send("what????");
        }
    });
});

//request statistics for a shortUrl
router.get("/urls/:shortUrl/:info", function (req, res) {
    statsService.getUrlInfo(req.params.shortUrl, req.params.info, function(data) {
        res.json(data);
    });

});

//user registration. if success, return username, else return empty string
router.post("/users", jsonParser, function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    userService.register(username, password, function(username) {
        res.json({username : username});
    });
});

//user login, pass username and password, return user login information (json)
router.get("/users/:username/:password", jsonParser, function(req, res){
    var username = req.params.username;
    var password = req.params.password;
    userService.login(username, password, function(data) {
            res.json(data);
    });
});

router.get("/users/urls/:username/:status", jsonParser, function(req, res){
    var username = req.params.username;
    var status = req.params.status;
    userService.getUrls(username, status, function(data) {
        res.json(data);
    });
});



module.exports = router;