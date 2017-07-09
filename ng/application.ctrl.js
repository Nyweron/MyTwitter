angular.module('app')
    .controller('ApplicationCtrl', function($scope, UserSvc, $location) {
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
            $scope.currentUser = null
            UserSvc.logout()
            $location.path('/')
        }

        if (UserSvc.isSessionActive()) {
            UserSvc.setXAuth()
            UserSvc.getUser().then(function(user) {
                $scope.currentUser = user;
            })
        }

    })