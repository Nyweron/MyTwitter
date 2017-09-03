var app = angular.module('app', [
    'ngRoute'
])
angular.module('app')
    .controller('ApplicationCtrl', function($scope, UserSvc, $location) {
        $scope.$on('login', function(_, user) {
            /*console.log("application.ctrl:",user)*/
            $scope.currentUser = user
        })
        $scope.$on('register', function(_, response) {
            $scope.registerResponse = response
        })
        $scope.disableRegisterResponse = function() {
            $scope.registerResponse = null
        }
        $scope.logout = function() {
            $scope.currentUser = null
            UserSvc.logout()
            $location.path('/')
        }

        if (UserSvc.isSessionActive()) {
            UserSvc.setXAuth()
            UserSvc.getUser().then(function(user) {
                $scope.currentUser = user;
            })
        }

    })
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
app.controller('PostsCtrl', function($scope, PostsSvc) {
    $scope.addPost = function() {
       /* console.log("ttt")*/
        if ($scope.postBody) {
             /* console.log("ttt2")*/
            PostsSvc.create({
              //  email: 'aaa@aa.aa',
                username: 'nyweron',
                body: $scope.postBody
            }).success(function(post) {
               /* console.log("DFDF")*/
                $scope.postBody = null
            })
        }
    }

    $scope.$on('ws:new_post', function(_, post) {
        $scope.$apply(function() {
            $scope.posts.unshift(post)
        })
    })

    PostsSvc.fetch().success(function(posts) {
        $scope.posts = posts
    })

})
app.service('PostsSvc', ['$http', function($http) {
    this.fetch = function() {
        return $http.get('/posts')
    }
    this.create = function(post) {
        return $http.post('/posts', post)
    }
}])
angular.module('app')
    .controller('RegisterCtrl', function($scope, UserSvc) {
        let ctrl = this
        $scope.register = function(email, username, password, firstname, lastname) {

            $scope.usernameRequired = ''
            $scope.passwordRequired = ''
            $scope.emailRequired = ''

            ctrl.name = ctrl.registerValidationUsername(username)
            ctrl.pass = ctrl.registerValidationPassword(password)
            ctrl.email = ctrl.registerValidationEmail(email)

            if (ctrl.name && ctrl.pass && ctrl.email) {
                UserSvc.emailIsExist(email).then(function(result) {
                    if (result == "false") {
                        UserSvc.register(email, username, password, firstname, lastname)
                            .then(function(response) {
                                $scope.$emit('register', "Konto zarejestrowane poprawnie, zaloguj się.")
                                $scope.email = ""
                                $scope.username = ""
                                $scope.password = ""
                                $scope.firstname = ""
                                $scope.lastname = ""
                                $scope.emailRequired = ''
                                $scope.passwordRequired = ''

                            })
                    } else {
                        $scope.disableRegisterResponse()
                        $scope.emailRequired = 'This email exist in db'
                    }
                })
            }
        },

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
        },

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
        },

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
        },

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
angular.module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', { controller: 'PostsCtrl', templateUrl: 'posts.html' })
            .when('/register', { controller: 'RegisterCtrl', templateUrl: 'register.html' })
            .when('/login', { controller: 'LoginCtrl', templateUrl: 'login.html' })
            .when('/logout', { controller: 'ApplicationCtrl', templateUrl: 'posts.html' })
    })
angular.module('app')
    .service('UserSvc', function($http, $window) {
        let svc = this
        
        svc.getUser = function() {
           /* console.log("UserSvc:getUser")*/
            return $http.get('/users')
                .then(function(response) {
                    return response.data
                })
        }
        svc.login = function(email, password) {
            /* console.log("DDc", email)*/
            return $http.post('/sessions', {
                password: password,
                email: email,
            }).then(function(response) {
               /* console.log("DDc5")*/
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

        svc.emailIsExist = function(email){
            return $http.post('/users/checkEmail', {email:email})
                .then(function(response) {
                    return response.data
                }) 
        }
    })
angular.module('app')
    .service('WebSocketSvc', function($rootScope) {

        function websocketHost() {
            if (window.location.protocol === "https:") {
                return "wss://" + window.location.host

            } else {
                return "ws://" + window.location.host

            }
        }

        var connection

        this.connect = function() {
            connection = new WebSocket(websocketHost())


            connection.onopen = function() {
                console.log('WebSocket connected')
            }
            connection.onmessage = function(e) {
                var payload = JSON.parse(e.data)
                $rootScope.$broadcast('ws:' + payload.topic, payload.data)
            }

        }
        this.send = function(topic, data) {
            var json = JSON.stringify({ topic: topic, data: data })
            connection.send(json)
        }
    }).run(function(WebSocketSvc) {
        WebSocketSvc.connect()
    })