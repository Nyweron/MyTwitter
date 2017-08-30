var Post = require('../../models/post')
var router = require('express').Router()
var websockets = require('../../websockets')

router.get('/', function(req, res, next) {
    Post.find()
        .sort('-date')
        .exec(function(err, posts) {
            if (err) { return next(err) }
            res.send(posts)
        })
})

router.post('/', function(req, res, next) {
    console.log("posts.js:", req.body)
    console.log("posts.js  req.auth:",  req.auth)
    var post = new Post({ body: req.body.body })
    post.username = req.auth.username
    post.email = req.auth.email
    post.userID = req.auth.id
    post.save(function(err, post) {
        if (err) { return next(err) }
        websockets.broadcast('new_post', post)
        res.json(201, post)
    })
})

module.exports = router