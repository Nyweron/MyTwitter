var express = require('express')
var Post = require('./models/post')
const path = require('path')
var app = express()


app.get('/', function(req, res) {
    console.log()
    res.sendFile(path.join(__dirname, '/', 'layouts/posts.html'))
})

app.get('/posts', function(req, res, next) {
    console.log("posts get")
    Post.find(function(err, posts) {
        console.log("posts get in:" + posts)
        if (err) { return next(err) }
        res.send(posts)
    })
    console.log("posts get end")
})

//use postman
app.post('/posts', function(req, res, next) {
    console.log("posts post")
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
    console.log("posts post end")
})

var port = process.env.PORT || 3002
app.listen(port, function() {
    console.log('app listening on port', port)
})