var app=angular.module("app",["ngRoute"]);app.controller("PostsCtrl",["$scope","PostsSvc",function(t,o){t.addPost=function(){t.postBody&&o.create({username:"nyweron",body:t.postBody}).success(function(o){t.posts.unshift(o),t.postBody=null})},o.fetch().success(function(o){t.posts=o})}]),app.service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/posts")},this.create=function(o){return t.post("/posts",o)}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"})}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInBvc3RzLmN0cmwuanMiLCJwb3N0cy5zdmMuanMiLCJyb3V0ZXMuanMiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsInVzZXJuYW1lIiwiYm9keSIsInN1Y2Nlc3MiLCJwb3N0IiwicG9zdHMiLCJ1bnNoaWZ0IiwiZmV0Y2giLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLElBQUFDLFFBQUFDLE9BQUEsT0FDQSxZQ0RBRixJQUFBRyxXQUFBLGFBQUEsU0FBQSxXQUFBLFNBQUFDLEVBQUFDLEdBQ0FELEVBQUFFLFFBQUEsV0FDQUYsRUFBQUcsVUFDQUYsRUFBQUcsUUFDQUMsU0FBQSxVQUNBQyxLQUFBTixFQUFBRyxXQUNBSSxRQUFBLFNBQUFDLEdBQ0FSLEVBQUFTLE1BQUFDLFFBQUFGLEdBQ0FSLEVBQUFHLFNBQUEsUUFLQUYsRUFBQVUsUUFBQUosUUFBQSxTQUFBRSxHQUNBVCxFQUFBUyxNQUFBQSxPQ2RBYixJQUFBZ0IsUUFBQSxZQUFBLFFBQUEsU0FBQUMsR0FFQUMsS0FBQUgsTUFBQSxXQUNBLE9BQUFFLEVBQUFFLElBQUEsV0FFQUQsS0FBQVYsT0FBQSxTQUFBSSxHQUNBLE9BQUFLLEVBQUFMLEtBQUEsU0FBQUEsT0NOQVgsUUFBQUMsT0FBQSxPQUNBa0IsUUFBQSxpQkFBQSxTQUFBQyxHQUNBQSxFQUNBQyxLQUFBLEtBQUFuQixXQUFBLFlBQUFvQixZQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xyXG4gICAgJ25nUm91dGUnXHJcbl0pIiwiYXBwLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgUG9zdHNTdmMpIHtcclxuICAgICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xyXG4gICAgICAgICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICdueXdlcm9uJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxyXG4gICAgICAgICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uKHBvc3QpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHBvc3QpXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFBvc3RzU3ZjLmZldGNoKCkuc3VjY2VzcyhmdW5jdGlvbihwb3N0cykge1xyXG4gICAgICAgICRzY29wZS5wb3N0cyA9IHBvc3RzXHJcbiAgICB9KVxyXG59KSIsImFwcC5zZXJ2aWNlKCdQb3N0c1N2YycsIFsnJGh0dHAnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHRoaXMuZmV0Y2ggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvcG9zdHMnKVxyXG4gICAgfVxyXG4gICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbihwb3N0KSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9wb3N0cycsIHBvc3QpXHJcbiAgICB9XHJcbn1dKSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC53aGVuKCcvJywgeyBjb250cm9sbGVyOiAnUG9zdHNDdHJsJywgdGVtcGxhdGVVcmw6ICdwb3N0cy5odG1sJyB9KVxyXG4gICAgfSkiXX0=
