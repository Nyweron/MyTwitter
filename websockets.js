var ws = require("ws")
var _ = require("lodash")
var clients = []


/*Add or remove clients on web*/
exports.connect = function(server) {
    var wss = new ws.Server({ server: server })
    wss.on('connection', function(ws) {
        clients.push(ws)
        exports.broadcast("Connect new client")

        ws.on('close', function() {
            _.remove(clients, ws)
        })
        ws.send('Witaj')
    })
}

/*Send info about new post to the avaiable clients on web*/
exports.broadcast = function(topic, data) {
    var json = JSON.stringify({ topic: topic, data: data })
    clients.forEach(function(clients) {
        clients.send(json)
    })
}