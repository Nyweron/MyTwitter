app.controller('PostsCtrl', function($scope, PostsSvc) {
    $scope.addPost = function() {
        if ($scope.postBody && $scope.currentUser) {
            $scope.youAreNotLogged = ""
            PostsSvc.create({
                username: '',
                body: $scope.postBody
            }).success(function(post) {
                $scope.postBody = null
            })
        } else{
            if(!$scope.currentUser){
                $scope.youAreNotLogged = "You can't add post, you are not logged."
            } else if($scope.currentUser && !$scope.postBody){
                $scope.youAreNotLogged = "You have to write a msg."
            }
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