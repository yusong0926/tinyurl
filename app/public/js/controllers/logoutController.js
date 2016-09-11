/**
 * Created by syu on 9/6/16.
 */
/**
 * Created by syu on 9/5/16.
 */
/**
 * Created by syu on 9/5/16.
 */
var app = angular.module("tinyurlApp");

app.controller("logoutController",
    ["$scope", "$http", "$location", "loginInfo",  function ($scope, $http, $location, loginInfo) {
        $scope.userInfo = loginInfo;
        $scope.logout= function () {

            $scope.userInfo.username = '';
            $scope.userInfo.status = "unlogin";
            $scope.userInfo.urls = {
            }
        };

            $location.path("/");
    }]);