angular.module('app')
    .controller('RegisterCtrl', function($scope, UserSvc) {
        $scope.formInfo = {}
        $scope.register = function(username, password) {


            $scope.nameRequired = ''
            $scope.emailRequired = ''
            $scope.passwordRequired = ''

            console.log("tetst")
            console.log(username)
            console.log(password)
            if (!username) {
                $scope.nameRequired = 'Name Required';
            } else {
                $scope.nameRequired = '';
            }

            if (!password) {
                $scope.passwordRequired = 'Password Required';
            } else {
                $scope.passwordRequired = '';
            }


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