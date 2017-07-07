var expect = require('chai').expect
var ctrl = require('../../../../controllers/api/posts')
var api = require('../support/api')
var Post = require('../../../../models/post')

describe('controllers.api.posts', function() {

    beforeEach(function(done) {
        Post.remove({}, done)
    })


    describe('GET /api/posts', function() {

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
})