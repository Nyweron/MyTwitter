var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(require('./auth'))
app.use('/posts', require('./controllers/api/posts'))
app.use(require('./controllers/static'))

app.use('/sessions', require('./controllers/api/sessions'))
app.use('/users', require('./controllers/api/users'))


var port = process.env.PORT || 3002
var server = app.listen(port, function() {
    console.log('app listening on port', port)
})
require('./websockets').connect(server)