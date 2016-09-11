/**
 * Created by syu on 9/5/16.
 */
var app = angular.module("tinyurlApp");

app.controller("registerController",
    ["$scope", "$http", "$location", "loginInfo", function ($scope, $http, $location, loginInfo) {
        $scope.userInfo = loginInfo;
        $scope.message = '';
        $scope.register = function () {
            $http.post("/api/v1/users", {
                username: $scope.username,
                password: $scope.password
            })
                .success(function (data) {
                    $scope.userInfo.username = data.username;
                    if (data.username !== '') {
                        $scope.userInfo.status= "login";
                    }
                    $scope.urls = {

                    };
                    if (data.username !== '') {

                        $location.path("/");
                    } else {
                        $scope.message="Username already exists, please use another name!";

                    }

                });
        }
    }]);