angular.module('app') 
    .controller('RegisterCtrl', function($scope, UserSvc) {
        var ctrl = this
        $scope.register = function(username, password) {

            console.log("tempp")

            $scope.nameRequired = ''
            $scope.passwordRequired = ''

         
            ctrl.name = ctrl.registerValidationUsername(username)
            ctrl.pass = ctrl.registerValidationPassword(password)


            if (ctrl.name && ctrl.pass) {
                console.log("wszedl")
                UserSvc.register(username, password)
                    .then(function(response) {
                        $scope.$emit('register', "Konto zarejestrowane poprawnie, zaloguj się.")
                        $scope.username = ""
                        $scope.password = ""
                    })
            } else {}


        }

        ctrl.registerValidationUsername = function(username) {
            if (username != undefined) {
                if ( username.length < 3) {
                    $scope.nameRequired = 'Name require 3 letters'
                    return false
                } else {
                    $scope.nameRequired = ''
                    return true
                }    
            } else {
                $scope.nameRequired = 'Name Required'
                return false
            }   
        }

        ctrl.registerValidationPassword = function(password){
            if (password != undefined) {
                if ( password.length < 3) {
                    $scope.passwordRequired = 'Password require 3 letters'
                    return false
                } else {
                    $scope.passwordRequired = ''
                    return true
                }    
            } else {
                $scope.passwordRequired = 'Password Required'
                return false
            }   
        }


    })

