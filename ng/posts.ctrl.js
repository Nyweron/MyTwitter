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