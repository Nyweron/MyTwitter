var app = angular.module('app', [])
app.controller('PostsCtrl', function($scope, PostsSvc) {
    $scope.addPost = () => {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'nyweron',
                body: $scope.postBody
            }).success((post) => {
                $scope.posts.unshift(post)
                $scope.postBody = null
            })
        }
    }

    PostsSvc.fetch().success((posts) => {
        $scope.posts = posts
    })
})

app.service('PostsSvc', function($http) {
    this.fetch = () => {
        return $http.get('/posts')
    }
    this.create = (post) => {
        return $http.post('/posts', post)
    }
})