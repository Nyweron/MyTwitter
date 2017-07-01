angular.module('app')
    .controller('RegisterCtrl', function($scope, UserSvc) {
        $scope.register = function(username, password) {
            if (username && password) {
                console.log("test")
                UserSvc.register(username, password)
                    .then(function(response) {
                        $scope.$emit('register', "Konto zarejestrowane poprawnie, zaloguj się.")
                        $scope.username = ""
                        $scope.password = ""
                    })
            } else {
                console.log("test2")
            }

        }
    })