var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use('/posts', require('./controllers/api/posts'))
app.use(require('./controllers/static'))

var port = process.env.PORT || 3002
app.listen(port, function() {
    console.log('app listening on port', port)
})