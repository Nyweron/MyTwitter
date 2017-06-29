var app = angular.module('app', [])
app.controller('PostsCtrl', function($scope, $http) {
    $http.get('/posts')
        .success(function(posts) {
            $scope.posts = posts
        })
    $scope.addPost = function() {

        if ($scope.postBody) {
            $http.post('/posts', {
                username: 'nyweron',
                body: $scope.postBody
            }).success(function(post) {
                $scope.posts.unshift(post)
                $scope.postBody = null
            })

        }
    }

    $http.get('/posts').success(function(posts) {
        $scope.posts = posts
    })
})