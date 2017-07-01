var express = require('express')
var jwt = require('jwt-simple')
var app = express()
app.use(require('body-parser').json())

var secretKey = 'supersecretket'

app.post('/session', function(req, res) {
    var username = req.body.username
        //TO DO veryfication password
    var token = jwt.encode({ username: username }, secretKey)
    res.json(token)
})

app.get('/user', function(req, res) {
    var token = req.headers['x-auth']
    var user = jwt.decode(token, secretKey)
        //todo download info about user from db
    res.json(token)
})

app.listen(3002)