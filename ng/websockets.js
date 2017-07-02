angular.module('app')
    .run(function($rootScope) {
        var url = 'ws://localhost:3002'
        var connection = new WebSocket(url)

        connection.onopen = function() {
            console.log('WebSocket connected')
        }

        connection.onmessage = function(e) {
            var payload = JSON.parse(e.data)
            $rootScope.$broadcast('ws:' + payload.topic, payload.data)
        }

    })