/**
 * Created by soyu on 2016-08-28.
 */

var app = angular.module('tinyurlApp', ['ngRoute', 'ngResource', 'chart.js']);

// Create the factory that share the Fact
app.factory('loginInfo', function(){
    return {
        username : '',
        status : "unlogin",
        urls:{}
    };
});


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./public/views/home.html",
            controller: "homeController"
        })

        .when("/urls/:shortUrl", {
            templateUrl: "./public/views/url.html",
            controller: "urlController"
        })
        .when("/registration", {
            templateUrl: "./public/views/registration.html",
            controller: "registerController"
        })
        .when("/logout", {
            templateUrl: "./public/views/home.html",
            controller: "logoutController"
        })
        .when("/login", {
            templateUrl: "./public/views/login.html",
            controller: "loginController"
        });
});
