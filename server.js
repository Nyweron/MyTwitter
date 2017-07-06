var express = require('express')
var app = express()
var websockets = require('./websockets')

app.use(require('./controllers'))

var port = process.env.PORT || 3002
var server = app.listen(port, function() {
    console.log('Server', process.pid, ' listening on port', port)
})
websockets.connect(server)