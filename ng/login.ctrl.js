angular.module('app')
    .controller('LoginCtrl', function($scope, UserSvc, $location) {
        let ctrl = this

        $scope.login = function(email, password) {

                ctrl.email = ctrl.loginValidationEmail(email)
                ctrl.pass = ctrl.loginValidationPassword(password)

                if (ctrl.pass && ctrl.email) {
                    UserSvc.login(email, password)
                        .then(function(user) {
                                $scope.emailRequired = ''
                                $scope.passwordRequired = ''
                                $scope.loginResponse = null
                                $scope.$emit('login', user)
                                $location.path('/')
                            },
                            function(err) {
                                $scope.loginResponse = ' Invalid email or password. Check once again and try it again.'
                            })
                }
            },

            ctrl.loginValidationEmail = function(email) {
                let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

                if (email != undefined) {
                    if (email.match(mailformat) != null) {
                        $scope.emailRequired = ''
                        return true
                    } else {
                        $scope.emailRequired = 'Invalid email format'
                        $scope.loginResponse = null
                        return false
                    }
                } else {
                    $scope.emailRequired = 'Email required'
                    $scope.loginResponse = null
                    return false
                }
            },

            ctrl.loginValidationPassword = function(password) {
                if (password != undefined) {
                    if (password.length < 3) {
                        $scope.passwordRequired = 'Password require 3 letters'
                        $scope.loginResponse = null
                        return false
                    } else {
                        $scope.passwordRequired = ''
                        return true
                    }
                } else {
                    $scope.passwordRequired = 'Password Required'
                    $scope.loginResponse = null
                    return false
                }
            }

    })