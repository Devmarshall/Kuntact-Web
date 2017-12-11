(function () {
    var app = angular.module('Kuntact')
    app.controller('NavController', ['$scope', '$http', '$state', '$interval', function ($scope, $http, $state, $interval) {

        // if (localStorage['User-Data']) {
        //     $scope.loggedIn = true;
        //     $scope.user = JSON.parse(localStorage['User-Data']);
        // } else {
        //     $scope.loggedIn = false;
        //     $state.go('newbie');
        // }

        // $scope.logOut = function () {
        //     localStorage.clear();
        //     $scope.loggedIn = false;
        //     $state.go('newbie')
        // }
    }])

    app.controller('IndexController', ['$scope', '$state', function ($scope, $state) {
        // if (localStorage['User-Data']) {
        //     $scope.loggedIn = true;
        //     $state.go('main');
        // } else {
        //     $scope.loggedIn = false;
        //     $state.go('index');
        // }
    }])

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(email)) {
            return true;
        } else {
            return false;
        }
    }

}());