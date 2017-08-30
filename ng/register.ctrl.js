angular.module('app')
    .controller('RegisterCtrl', function($scope, UserSvc) {
        var ctrl = this
        $scope.register = function(email, username, password, firstname, lastname) {

            $scope.usernameRequired = ''
            $scope.passwordRequired = ''
            $scope.emailRequired = ''

            ctrl.name = ctrl.registerValidationUsername(username)
            ctrl.pass = ctrl.registerValidationPassword(password)
            ctrl.email = ctrl.registerValidationEmail(email)

            if (ctrl.name && ctrl.pass && ctrl.email) {

                UserSvc.emailIsExist(email).then(function(result) {
                    console.log("result.x")
                    console.log(result)

                    console.log("typ:"+typeof(result))

                    if (result == "false") {
                        console.log("wszedl1.2", result)
                        UserSvc.register(email, username, password, firstname, lastname)
                            .then(function(response) {
                                console.log("wszedl2")
                                $scope.$emit('register', "Konto zarejestrowane poprawnie, zaloguj się.")
                                $scope.email = ""
                                $scope.username = ""
                                $scope.password = ""
                                $scope.firstname = ""
                                $scope.lastname = ""
                                $scope.emailRequired = ''
                            })
                    } else {
                        console.log("wszedl1.3", result)
                        $scope.emailRequired = 'This email exist in db'
                    }
                })

                console.log("wszedl1")

            } else {}
        }

        ctrl.registerValidationEmail = function(email) {
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

            if (email != undefined) {
                if (email.match(mailformat) != null) {
                    $scope.emailRequired = ''
                    return true
                } else {
                    $scope.emailRequired = 'Invalid email format'
                    return false
                }
            } else {
                $scope.emailRequired = 'Email required'
                return false
            }
        }

        ctrl.registerValidationUsername = function(username) {
            if (username != undefined) {
                if (username.length < 3) {
                    $scope.usernameRequired = 'Username require 3 letters'
                    return false
                } else {
                    $scope.usernameRequired = ''
                    return true
                }
            } else {
                $scope.usernameRequired = 'Username Required'
                return false
            }
        }

        ctrl.registerValidationFirstname = function(firstname) {
            if (firstname != undefined) {
                if (firstname.length < 3) {
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

        ctrl.registerValidationPassword = function(password) {
            if (password != undefined) {
                if (password.length < 3) {
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