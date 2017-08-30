angular.module('app')
    .service('UserSvc', function($http, $window) {
        var svc = this
        svc.getUser = function() {
            console.log("UserSvc:getUser")
            return $http.get('/users')
                .then(function(response) {
                     console.log("UserSvc:getUser:",response.data)
                    return response.data
                })
        }
        svc.login = function(email, password) {
             console.log("DDc", email)
            return $http.post('/sessions', {
                password: password,
                email: email,
            }).then(function(response) {
                console.log("DDc")
                svc.token = response.data
                svc.setToken(svc.token)
                $http.defaults.headers.common['X-Auth'] = response.data
                return svc.getUser()
            })
        }
        svc.register = function(email, username, password, firstname, lastname) {
            return $http.post('/users', {
                email: email,
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname,
            }).then(function(response) {
                return response
            })
        }
        svc.logout = function() {
            $window.localStorage.clear()
            delete $http.defaults.headers.common['X-Auth']
        }
        svc.setToken = function(token) {
            return $window.localStorage.token = token
        }
        svc.getToken = function() {
            return $window.localStorage.token
        }
        svc.isSessionActive = function() {
            return $window.localStorage.token ? true : false
        }
        svc.setXAuth = function() {
            return $http.defaults.headers.common['X-Auth'] = svc.getToken()
        }
    })