angular.module('app')
    .service('UserSvc', function($http, $window) {
        var svc = this
        svc.getUser = function() {
            return $http.get('/users')
                .then(function(response) {
                    return response.data
                })
        }
        svc.login = function(username, password) {
            return $http.post('/sessions', {
                username: username,
                password: password
            }).then(function(response) {
                svc.token = response.data
                svc.setToken(svc.token)
                $http.defaults.headers.common['X-Auth'] = response.data
                return svc.getUser()
            })
        }
        svc.register = function(username, password) {
            return $http.post('/users', {
                username: username,
                password: password
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