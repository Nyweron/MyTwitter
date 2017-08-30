angular.module('app')
    .controller('LoginCtrl', function($scope, UserSvc, $location) {
        $scope.login = function(email, password) {
            UserSvc.login(email, password)
                .then(function(user) {
                    console.log("login.ctrl:",user)
                    $scope.$emit('login', user)
                    $location.path('/')
                })
        }
    })