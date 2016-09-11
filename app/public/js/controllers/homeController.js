/**
 * Created by soyu on 2016-08-28.
 */

var app = angular.module("tinyurlApp");

app.controller("homeController",
    ["$scope", "$http", "$location", "loginInfo", function ($scope, $http, $location, loginInfo) {
        $scope.userInfo = loginInfo;
        $http.get("/api/v1/users/urls/" + $scope.userInfo.username + "/" + $scope.userInfo.status, {

        })
            .success(function (data) {
                if(data.urls) {
                    data.urls.forEach(function(url){
                        url.shortUrlToShow = "http://localhost/" + url.shortUrl;
                    });
                }
                $scope.userInfo.urls = data.urls;
            });


        $scope.submit = function () {
            $http.post("/api/v1/urls", {
                    longUrl: $scope.longUrl,
                    username: $scope.userInfo.username
                })
                .success(function (data) {
                    $location.path("/urls/" + data.shortUrl);
                });

        }
    }]);