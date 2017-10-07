app.service('PostsSvc', ['$http', function($http) {
    this.fetch = function() {
        return $http.get('/posts')
    }
    this.create = function(post) {
        console.log(post)
        return $http.post('/posts', post)
    }
}])