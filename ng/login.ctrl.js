angular.module('app')
    .controller('LoginCtrl', function($scope, UserSvc, $location) {
        $scope.login = function(email, username, password) {
            UserSvc.login(email, username, password)
                .then(function(user) {
                    $scope.$emit('login', user)
                    $location.path('/')
                })
        }
    })