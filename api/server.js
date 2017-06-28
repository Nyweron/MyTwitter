var express = require('express')
var Post = require('./models/post')
var app = express()

app.get('/api/posts', function(req, res, next) {
    Post.find(function(err, posts) {
        if (err) { return next(err) }
        res.send(posts)
    })
})

//use postman
app.post('/api/posts', function(req, res, next) {
    console.log(req.headers.username)
    var post = new Post({
        username: req.headers.username,
        body: req.headers.body
    })

    post.save(function(err, post) {
        if (err) { return next(err) }
        console.log("Post added")
        res.send(201)
    })
})

var port = process.env.PORT || 3002
app.listen(port, function() {
    console.log('app listening on port', port)
})