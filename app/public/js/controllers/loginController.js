/**
 * Created by syu on 9/5/16.
 */
/**
 * Created by syu on 9/5/16.
 */
var app = angular.module("tinyurlApp");

app.controller("loginController",
    ["$scope", "$http", "$location", "loginInfo",  function ($scope, $http, $location, loginInfo) {
        $scope.userInfo = loginInfo;
        $scope.message = "";
        $scope.login= function () {
            $http.get("/api/v1/users/" + $scope.username + "/" + $scope.password, {

            })
                .success(function (data) {

                    $scope.userInfo.username = data.username;
                    $scope.userInfo.status = data.status;
                    $scope.userInfo.urls = data.urls;
                    if (data.status === "login") {
                        $location.path("/");
                    } else {
                        $scope.message = data.status;
                    }
                });
        }
    }]);