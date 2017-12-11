(function () {
    var app = angular.module('Kuntact', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('index', {
            url: '/',
            templateUrl: '/app/views/indexview.html',
            controller: 'IndexController'
        })

    });
}());