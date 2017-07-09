angular.module('app')
    .controller('RegisterCtrl', function($scope, UserSvc) {
        $scope.register = function(username, password) {



            $scope.nameRequired = ''
            $scope.passwordRequired = ''

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
                UserSvc.register(username, password)
                    .then(function(response) {
                        $scope.$emit('register', "Konto zarejestrowane poprawnie, zaloguj się.")
                        $scope.username = ""
                        $scope.password = ""
                    })
            } else {}
        }
    })