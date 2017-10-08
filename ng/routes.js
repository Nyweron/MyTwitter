angular.module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', { controller: 'PostsCtrl', templateUrl: 'posts.html' })
            .when('/register', { controller: 'RegisterCtrl', templateUrl: 'register.html' })
            .when('/login', { controller: 'LoginCtrl', templateUrl: 'login.html' })
            .when('/logout', { controller: 'ApplicationCtrl', templateUrl: 'posts.html' })
            .when('/profile', 
            {
                controller: 'ProfileCtrl',
                templateUrl: 'profile.html',
                resolve:{
                    "check":function(UserSvc, $location){  
                        //if user is logged then he has access to profile
                        if (!UserSvc.isSessionActive()) {
                           $location.path('/');
                        }
                    }
                }
            })
            .otherwise({ redirectTo: '/' })
    })