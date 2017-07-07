var expect = require('chai').expect
var ctrl = require('../../../../controllers/api/posts')
var api = require('../support/api')
var user = require('../support/user')
var Post = require('../../../../models/post')


describe('controllers.api.posts', function() {
    beforeEach(function(done) {
        Post.remove({}, done)
    })
    describe('GET /posts', function() {
        beforeEach(function(done) {
            var posts = [
                { body: 'post1', username: 'dzem' },
                { body: 'post2', username: 'dzem' },
                { body: 'post3', username: 'dzem' }
            ]
            Post.create(posts, done)
        })

        it('it has 3 posts', function(done) {
            api.get('/posts')
                .expect(200)
                .expect(function(response) {
                    expect(response.body).to.have.length(3)
                })
                .end(done)
        })
    })

    describe('POST /posts', function() {
        var token

        beforeEach(function(done) {
            user.create('dzem', 'pass', function(err, user) {
                token = user.token
                done(err)
            })
        })

        beforeEach(function(done) {
            api.post('/posts')
                .send({ body: 'this is my new post' })
                .set('X-Auth', token)
                .expect(201)
                .end(done)
        })

        it('added 1 new post', function(done) {
            Post.findOne(function(err, post) {
                expect(post.body).to.equal('this is my new post')
                done(err)
            })
        })
    })
})