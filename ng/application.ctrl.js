angular.module('app')
    .controller('ApplicationCtrl', function($scope) {
        $scope.$on('login', function(_, user) {
            $scope.currentUser = user
        })
        $scope.$on('register', function(_, response) {
            $scope.registerResponse = response
        })

        $scope.disableRegisterResponse = function() {
            $scope.registerResponse = null
        }
    })