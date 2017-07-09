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
            console.log("logout")
            $scope.currentUser = null
            UserSvc.logout()
            $location.path('/')
        }

        var getToken = UserSvc.getToken()
        console.log("getToken", getToken)

        var isSessionActiovate = UserSvc.isSessionActive()
        console.log("isSessionActiovate", isSessionActiovate)

        var xauth = UserSvc.setXAuth()
        console.log("xauth:" + xauth)

        if (isSessionActiovate) {
            console.log("Te")
            console.log("XXX:", UserSvc.getUser())
            UserSvc.getUser().then(function(user) {
                $scope.currentUser = user;
            })
        }

    })