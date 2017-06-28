var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello Nyweron test!')
})

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log('app listening on port 3000')
})
