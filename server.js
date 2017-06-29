var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')
const path = require('path')
var app = express()
app.use(bodyParser.json())


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/', 'layouts/posts.html'))
})

app.get('/posts', function(req, res, next) {
    Post.find()
        .sort('-date')
        .exec(function(err, posts) {
            if (err) { return next(err) }
            res.send(posts)
        })
})

//use postman
app.post('/posts', function(req, res, next) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    })
    post.save(function(err, post) {
        if (err) { return next(err) }
        res.send(201, post)
    })
})

var port = process.env.PORT || 3002
app.listen(port, function() {
    console.log('app listening on port', port)
})