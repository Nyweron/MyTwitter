app.service('PostsSvc', ['$http', function($http) {
    this.fetch = () => {
        console.error("Problem")
        return $http.get('/posts')
    }
    this.create = (post) => {
        return $http.post('/posts', post)
    }
}])