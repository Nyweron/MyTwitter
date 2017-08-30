app.controller('PostsCtrl', function($scope, PostsSvc) {
    $scope.addPost = function() {
        console.log("ttt")
        if ($scope.postBody) {
              console.log("ttt2")
            PostsSvc.create({
              //  email: 'aaa@aa.aa',
                username: 'nyweron',
                body: $scope.postBody
            }).success(function(post) {
                console.log("DFDF")
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