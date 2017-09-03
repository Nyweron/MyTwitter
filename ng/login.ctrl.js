angular.module('app')
    .controller('LoginCtrl', function($scope, UserSvc, $location) {
        let ctrl = this

        $scope.login = function(email, password) {
            console.log("Login")
            UserSvc.login(email, password)
                .then(function(user) {
                    console.log("login.ctrl:",user)
                    $scope.$emit('login', user)
                    $location.path('/')
                },
                function(err) {
                    console.log("login.ctrl.err:",err.status)
                    $scope.loginResponse = ' Invalid email or password'
                })
                 console.log("Login2")
        }

        ctrl.loginValidationEmail = function(email) {
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

    })