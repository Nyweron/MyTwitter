app.service('PostsSvc', function($http) {
    this.fetch = () => {
        return $http.get('/posts')
    }
    this.create = (post) => {
        return $http.post('/posts', post)
    }
})