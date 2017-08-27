angular.module('app') 
    .controller('RegisterCtrl', function($scope, UserSvc) {
        var ctrl = this
        $scope.register = function(username, password, firstname) {

            console.log("tempp")

            $scope.usernameRequired = ''
            $scope.passwordRequired = ''
            $scope.firstnameRequired = ''
          
     

         
            ctrl.name = ctrl.registerValidationUsername(username)
            ctrl.pass = ctrl.registerValidationPassword(password)
            ctrl.first = ctrl.registerValidationFirstname(firstname)


            if (ctrl.name && ctrl.pass) {
                console.log("wszedl")
                UserSvc.register(username, password, firstname)
                    .then(function(response) {
                        $scope.$emit('register', "Konto zarejestrowane poprawnie, zaloguj się.")
                        $scope.username = ""
                        $scope.password = ""
                        $scope.firstname = ""
                    })
            } else {}


        }

        ctrl.registerValidationUsername = function(username) {
            if (username != undefined) {
                if ( username.length < 3) {
                    $scope.usernameRequired = 'username require 3 letters'
                    return false
                } else {
                    $scope.usernameRequired = ''
                    return true
                }    
            } else {
                $scope.usernameRequired = 'username Required'
                return false
            }   
        }


        ctrl.registerValidationFirstname = function(firstname) {
            if (firstname != undefined) {
                if ( firstname.length < 3) {
                    $scope.firstnameRequired = 'First name require 3 letters'
                    return false
                } else {
                    $scope.firstnameRequired = ''
                    return true
                }    
            } else {
                $scope.firstnameRequired = 'First name Required'
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

