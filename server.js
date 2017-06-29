var express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
var app = express()

app.use(bodyParser.json())
app.use('/posts', require('./controllers/api/posts'))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/', 'layouts/posts.html'))
})


var port = process.env.PORT || 3002
app.listen(port, function() {
    console.log('app listening on port', port)
})