angular.module('app')
    .service('WebSocketSvc', function($rootScope) {

        function websocketHost() {
            if (window.location.protocol === "https:") {
                return "wss://" + window.location.host

            } else {
                return "ws://" + window.location.host

            }
        }

        var connection

        this.connect = function() {
            connection = new WebSocket(websocketHost())


            connection.onopen = function() {
                console.log('WebSocket connected')
            }
            connection.onmessage = function(e) {
                var payload = JSON.parse(e.data)
                $rootScope.$broadcast('ws:' + payload.topic, payload.data)
            }

        }
        this.send = function(topic, data) {
            var json = JSON.stringify({ topic: topic, data: data })
            connection.send(json)
        }
    }).run(function(WebSocketSvc) {
        WebSocketSvc.connect()
    })