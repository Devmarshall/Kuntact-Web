const serverUrl = 'http://localhost:3010';

(function () {
    var app = angular.module('Kuntact')
    app.controller('NavController', function ($rootScope, $scope, $http, $state, $interval) {

        if (localStorage['User-Data'] !== undefined) {
            console.log('logged in');
            $rootScope.loggedIn = true;
            $rootScope.CurrentUser = JSON.parse(localStorage['User-Data']);

        } else {
            $rootScope.loggedIn = false;
        }

        $scope.logOut = function () {
            localStorage.clear();
            $scope.loggedIn = false;
            $state.go('index');
            document.location.reload();
            console.log('logout fired');
        }

    })

    app.controller('IndexController', function ($http, $rootScope, $scope, $state) {
        if (localStorage['User-Data'] !== undefined) {
            $rootScope.loggedIn = true;
            $rootScope.CurrentUser = JSON.parse(localStorage['User-Data']);

        } else {
            $rootScope.loggedIn = false;
        }
    });

    app.controller('AuthController', function ($rootScope, $scope, $state, $http) {

        $scope.signup = function (newUser) {

            console.log(newUser)

            if (!checkCompleteFields(newUser)) {
                console.log('Incomplete Fields');
            } else {
                if (!validateEmail(newUser.email)) {
                    console.log('Invalid Email');
                } else {
                    console.log('Valid Email');
                    if (newUser.password1 !== newUser.password2) {
                        console.log('Passwords do not match');
                    } else {
                        console.log('Post Signup');
                        var postUser = {};

                        postUser.Name = {
                            firstName: newUser.firstName,
                            surName: newUser.lastName
                        };
                        postUser.email = newUser.email;
                        postUser.password = newUser.password1;
                        postUser.phoneNumber = newUser.phoneNumber;

                        $http.post(serverUrl + '/api/user/signup', postUser).then(function (response) {

                            if (response.data.errorMsg) {
                                console.log(errorMsg)
                            } else {
                                console.log(response.data);
                                localStorage.setItem('User-Data', JSON.stringify(response.data));
                                $rootScope.loggedIn = true;
                                $rootScope.CurrentUser = response.data;
                                $state.go('signup-success');
                            }

                        }, function (error) {
                            console.log(error);
                        })
                    }
                }
            }
        }

        $scope.login = function (user) {

            console.log(user);

            if (!checkCompleteFields(user)) {
                console.log('Incomplete Fields');
            } else {
                if (!validateEmail(user.email)) {
                    console.log('Invalid Email');
                } else {

                    console.log('Post login');

                    $http.post(serverUrl + '/api/user/login', user).then(function (response) {

                        if (response.data.errorMsg) {
                            console.log(errorMsg)
                        } else {
                            console.log(response.data);
                            localStorage.setItem('User-Data', JSON.stringify(response.data));
                            $rootScope.loggedIn = true;
                            $rootScope.CurrentUser = response.data;
                            $state.go('index');
                        }

                    }, function (error) {
                        console.log(error);
                    })

                }
            }


        }

    })

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    function checkCompleteFields(obj) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var val = obj[key];
                if (val.length == 0) {
                    return false
                }
            }
        }
        return true;
    }

}());