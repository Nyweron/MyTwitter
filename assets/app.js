var app=angular.module("app",["ngRoute"]);angular.module("app").controller("ApplicationCtrl",["$scope",function(e){e.$on("login",function(t,n){e.currentUser=n}),e.$on("register",function(t,n){e.registerResponse=n}),e.disableRegisterResponse=function(){e.registerResponse=null}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(e,t){e.login=function(n,o){t.login(n,o).then(function(t){e.$emit("login",t)})}}]),app.controller("PostsCtrl",["$scope","PostsSvc",function(e,t){e.addPost=function(){e.postBody&&t.create({username:"nyweron",body:e.postBody}).success(function(t){e.posts.unshift(t),e.postBody=null})},t.fetch().success(function(t){e.posts=t})}]),app.service("PostsSvc",["$http",function(e){this.fetch=function(){return e.get("/posts")},this.create=function(t){return e.post("/posts",t)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(e,t){e.register=function(n,o){e.nameRequired="",e.passwordRequired="",e.nameRequired=n?"":"Name Required",e.passwordRequired=o?"":"Password Required",n&&o?(console.log("test"),t.register(n,o).then(function(t){e.$emit("register","Konto zarejestrowane poprawnie, zaloguj się."),e.username="",e.password=""})):console.log("test2")}}]),angular.module("app").config(["$routeProvider",function(e){e.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(e){var t=this;t.getUser=function(){return e.get("/users").then(function(e){return e.data})},t.login=function(n,o){return e.post("/sessions",{username:n,password:o}).then(function(n){return t.token=n.data,e.defaults.headers.common["X-Auth"]=n.data,t.getUser()})},t.register=function(t,n){return e.post("/users",{username:t,password:n}).then(function(e){return e})}}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicG9zdHMuY3RybC5qcyIsInBvc3RzLnN2Yy5qcyIsInJlZ2lzdGVyLmN0cmwuanMiLCJyb3V0ZXMuanMiLCJ1c2VyLnN2Yy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRvbiIsIl8iLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJyZXNwb25zZSIsInJlZ2lzdGVyUmVzcG9uc2UiLCJkaXNhYmxlUmVnaXN0ZXJSZXNwb25zZSIsIlVzZXJTdmMiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0aGVuIiwiJGVtaXQiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJzdWNjZXNzIiwicG9zdCIsInBvc3RzIiwidW5zaGlmdCIsImZldGNoIiwic2VydmljZSIsIiRodHRwIiwidGhpcyIsImdldCIsInJlZ2lzdGVyIiwibmFtZVJlcXVpcmVkIiwicGFzc3dvcmRSZXF1aXJlZCIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsInN2YyIsImdldFVzZXIiLCJkYXRhIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLElBQUFDLFFBQUFDLE9BQUEsT0FDQSxZQ0RBRCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsbUJBQUEsU0FBQSxTQUFBQyxHQUNBQSxFQUFBQyxJQUFBLFFBQUEsU0FBQUMsRUFBQUMsR0FDQUgsRUFBQUksWUFBQUQsSUFFQUgsRUFBQUMsSUFBQSxXQUFBLFNBQUFDLEVBQUFHLEdBQ0FMLEVBQUFNLGlCQUFBRCxJQUdBTCxFQUFBTyx3QkFBQSxXQUNBUCxFQUFBTSxpQkFBQSxTQ1ZBVCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsYUFBQSxTQUFBLFVBQUEsU0FBQUMsRUFBQVEsR0FDQVIsRUFBQVMsTUFBQSxTQUFBQyxFQUFBQyxHQUNBSCxFQUFBQyxNQUFBQyxFQUFBQyxHQUNBQyxLQUFBLFNBQUFULEdBQ0FILEVBQUFhLE1BQUEsUUFBQVYsU0NMQVAsSUFBQUcsV0FBQSxhQUFBLFNBQUEsV0FBQSxTQUFBQyxFQUFBYyxHQUNBZCxFQUFBZSxRQUFBLFdBQ0FmLEVBQUFnQixVQUNBRixFQUFBRyxRQUNBUCxTQUFBLFVBQ0FRLEtBQUFsQixFQUFBZ0IsV0FDQUcsUUFBQSxTQUFBQyxHQUNBcEIsRUFBQXFCLE1BQUFDLFFBQUFGLEdBQ0FwQixFQUFBZ0IsU0FBQSxRQUtBRixFQUFBUyxRQUFBSixRQUFBLFNBQUFFLEdBQ0FyQixFQUFBcUIsTUFBQUEsT0NkQXpCLElBQUE0QixRQUFBLFlBQUEsUUFBQSxTQUFBQyxHQUVBQyxLQUFBSCxNQUFBLFdBQ0EsT0FBQUUsRUFBQUUsSUFBQSxXQUVBRCxLQUFBVCxPQUFBLFNBQUFHLEdBQ0EsT0FBQUssRUFBQUwsS0FBQSxTQUFBQSxPQ05BdkIsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGdCQUFBLFNBQUEsVUFBQSxTQUFBQyxFQUFBUSxHQUNBUixFQUFBNEIsU0FBQSxTQUFBbEIsRUFBQUMsR0FJQVgsRUFBQTZCLGFBQUEsR0FDQTdCLEVBQUE4QixpQkFBQSxHQUtBOUIsRUFBQTZCLGFBSEFuQixFQUdBLEdBRkEsZ0JBUUFWLEVBQUE4QixpQkFIQW5CLEVBR0EsR0FGQSxvQkFNQUQsR0FBQUMsR0FDQW9CLFFBQUFDLElBQUEsUUFDQXhCLEVBQUFvQixTQUFBbEIsRUFBQUMsR0FDQUMsS0FBQSxTQUFBUCxHQUNBTCxFQUFBYSxNQUFBLFdBQUEsZ0RBQ0FiLEVBQUFVLFNBQUEsR0FDQVYsRUFBQVcsU0FBQSxNQUdBb0IsUUFBQUMsSUFBQSxhQy9CQW5DLFFBQUFDLE9BQUEsT0FDQW1DLFFBQUEsaUJBQUEsU0FBQUMsR0FDQUEsRUFDQUMsS0FBQSxLQUFBcEMsV0FBQSxZQUFBcUMsWUFBQSxlQUNBRCxLQUFBLGFBQUFwQyxXQUFBLGVBQUFxQyxZQUFBLGtCQUNBRCxLQUFBLFVBQUFwQyxXQUFBLFlBQUFxQyxZQUFBLGtCQ0xBdkMsUUFBQUMsT0FBQSxPQUNBMEIsUUFBQSxXQUFBLFFBQUEsU0FBQUMsR0FDQSxJQUFBWSxFQUFBWCxLQUNBVyxFQUFBQyxRQUFBLFdBQ0EsT0FBQWIsRUFBQUUsSUFBQSxVQUNBZixLQUFBLFNBQUFQLEdBQ0EsT0FBQUEsRUFBQWtDLFFBR0FGLEVBQUE1QixNQUFBLFNBQUFDLEVBQUFDLEdBQ0EsT0FBQWMsRUFBQUwsS0FBQSxhQUNBVixTQUFBQSxFQUNBQyxTQUFBQSxJQUNBQyxLQUFBLFNBQUFQLEdBR0EsT0FGQWdDLEVBQUFHLE1BQUFuQyxFQUFBa0MsS0FDQWQsRUFBQWdCLFNBQUFDLFFBQUFDLE9BQUEsVUFBQXRDLEVBQUFrQyxLQUNBRixFQUFBQyxhQUdBRCxFQUFBVCxTQUFBLFNBQUFsQixFQUFBQyxHQUNBLE9BQUFjLEVBQUFMLEtBQUEsVUFDQVYsU0FBQUEsRUFDQUMsU0FBQUEsSUFDQUMsS0FBQSxTQUFBUCxHQUNBLE9BQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xyXG4gICAgJ25nUm91dGUnXHJcbl0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuY29udHJvbGxlcignQXBwbGljYXRpb25DdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRvbignbG9naW4nLCBmdW5jdGlvbihfLCB1c2VyKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXJcclxuICAgICAgICB9KVxyXG4gICAgICAgICRzY29wZS4kb24oJ3JlZ2lzdGVyJywgZnVuY3Rpb24oXywgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnJlZ2lzdGVyUmVzcG9uc2UgPSByZXNwb25zZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICRzY29wZS5kaXNhYmxlUmVnaXN0ZXJSZXNwb25zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUucmVnaXN0ZXJSZXNwb25zZSA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgVXNlclN2Yykge1xyXG4gICAgICAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgICAgICBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgdXNlcilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSkiLCJhcHAuY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBQb3N0c1N2Yykge1xyXG4gICAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XHJcbiAgICAgICAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJ255d2Vyb24nLFxyXG4gICAgICAgICAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XHJcbiAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24ocG9zdCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdClcclxuICAgICAgICAgICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUG9zdHNTdmMuZmV0Y2goKS5zdWNjZXNzKGZ1bmN0aW9uKHBvc3RzKSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RzID0gcG9zdHNcclxuICAgIH0pXHJcbn0pIiwiYXBwLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9wb3N0cycpXHJcbiAgICB9XHJcbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKHBvc3QpIHtcclxuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL3Bvc3RzJywgcG9zdClcclxuICAgIH1cclxufV0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuY29udHJvbGxlcignUmVnaXN0ZXJDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBVc2VyU3ZjKSB7XHJcbiAgICAgICAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5uYW1lUmVxdWlyZWQgPSAnJ1xyXG4gICAgICAgICAgICAkc2NvcGUucGFzc3dvcmRSZXF1aXJlZCA9ICcnXHJcblxyXG4gICAgICAgICAgICBpZiAoIXVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubmFtZVJlcXVpcmVkID0gJ05hbWUgUmVxdWlyZWQnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm5hbWVSZXF1aXJlZCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucGFzc3dvcmRSZXF1aXJlZCA9ICdQYXNzd29yZCBSZXF1aXJlZCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucGFzc3dvcmRSZXF1aXJlZCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJuYW1lICYmIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RcIilcclxuICAgICAgICAgICAgICAgIFVzZXJTdmMucmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgncmVnaXN0ZXInLCBcIktvbnRvIHphcmVqZXN0cm93YW5lIHBvcHJhd25pZSwgemFsb2d1aiBzacSZLlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudXNlcm5hbWUgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wYXNzd29yZCA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0MlwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLndoZW4oJy8nLCB7IGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLCB0ZW1wbGF0ZVVybDogJ3Bvc3RzLmh0bWwnIH0pXHJcbiAgICAgICAgICAgIC53aGVuKCcvcmVnaXN0ZXInLCB7IGNvbnRyb2xsZXI6ICdSZWdpc3RlckN0cmwnLCB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmh0bWwnIH0pXHJcbiAgICAgICAgICAgIC53aGVuKCcvbG9naW4nLCB7IGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLCB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnIH0pXHJcbiAgICB9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgLnNlcnZpY2UoJ1VzZXJTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG4gICAgICAgIHZhciBzdmMgPSB0aGlzXHJcbiAgICAgICAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL3VzZXJzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL3Nlc3Npb25zJywge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHN2Yy50b2tlbiA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUF1dGgnXSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN2Yy5yZWdpc3RlciA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL3VzZXJzJywge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pIl19
