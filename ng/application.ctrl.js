angular.module('app')
    .controller('ApplicationCtrl', function($scope, UserSvc) {
        $scope.$on('login', function(_, user) {
            $scope.currentUser = user
        })
        $scope.$on('register', function(_, response) {
            $scope.registerResponse = response
        })

        $scope.disableRegisterResponse = function() {
            $scope.registerResponse = null
        }

        $scope.logout = function() {
            console.log("logout")
            $scope.currentUser = null
            UserSvc.logout()
        }
    })