/**
 * Created by syu on 9/5/16.
 */
var UserModel = require('../models/userModel');
var UrlModel = require('../models/urlModel');


var register = function (username, password, callback) {
    UserModel.findOne({ username: username }, function (err, user) {
        if (user) {
            callback('');
        } else {
                var user = new UserModel({ username: username,  password: password});
                user.save();
                callback(username);
        }
    });
};

var login = function (username, password, callback) {
    UserModel.findOne({ username: username }, function (err, user) {
        if (user) {
            if (user.password === password) {
               // var data = {};
                UrlModel.find({username : username}, function(err, urls) {
                    var data = {
                       username : username,
                        status: "login",
                        urls : urls
                    };
                    callback(data);
                });
            } else {
                var data = {
                    username : '',
                    status: "WRONG_PASSWORD",
                    urls : {}
                };
                callback(data);
            }
        } else {
            var data = {
                username : '',
                status: "WRONG_USERNAME",
                urls : {}
            };
            callback(data);
        }
    });
};

var getUrls = function (username, status, callback) {

    UrlModel.find({username : username}, function(err, urls) {
        var data = {
            urls : urls
        };
        callback(data);
    });


};


module.exports = {
    register: register,
    login: login,
    getUrls:getUrls
};