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
        $scope.list =[
                {"id": 1, "type": "", "name": "email",    "required": "true", "placeholder": "Enter email address"},
                {"id": 2, "type": "", "name": "password", "required": "true", "placeholder": "Enter password"},
                {"id": 3, "type": "", "name": "nickname", "required": "false", "placeholder": "Enter nickname"},
                {"id": 4, "type": "", "name": "username", "required": "false", "placeholder": "Enter username"},
                {"id": 5, "type": "", "name": "lastname", "required": "false", "placeholder": "Enter lastname"},
                {"id": 6, "type": "", "name": "age",      "required": "false", "placeholder": "Enter age"}

            ]; 
    })