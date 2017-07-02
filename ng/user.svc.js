angular.module('app')
    .service('UserSvc', function($http) {
        var svc = this
        svc.getUser = function() {
            return $http.get('/users')
                .then(function(response) {
                    console.log("GetUser response.data ", response.data)
                    return response.data
                })
        }
        svc.login = function(username, password) {
            return $http.post('/sessions', {
                username: username,
                password: password
            }).then(function(response) {
                console.log("Login:", response.data)
                svc.token = response.data
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
            delete $http.defaults.headers.common['X-Auth']
        }
    })