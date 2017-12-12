(function () {
    var app = angular.module('Kuntact', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('index', {
            url: '/',
            templateUrl: '/app/views/indexview.html',
            controller: 'IndexController'
        });

        $stateProvider.state('login', {
            url: '/login',
            templateUrl: '/app/views/login.html',
            controller: 'AuthController'
        })

        $stateProvider.state('signup', {
            url: '/signup',
            templateUrl: '/app/views/signup.html',
            controller: 'AuthController'
        })

        $stateProvider.state('signup-success', {
            url: '/signup-success',
            templateUrl: '/app/views/signup-success.html',
            controller: 'AuthController'
        })

    });
}());