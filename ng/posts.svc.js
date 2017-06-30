app.service('PostsSvc', ['$http', function($http) {
    this.fetch = function() {
        console.error("Problem")
        return $http.get('/posts')
    }
    this.create = function(post) {
        return $http.post('/posts', post)
    }
}])