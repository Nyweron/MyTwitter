var expect = require('chai').expect
var ctrl = require('../../../../controllers/api/posts')
var api = require('../support/api')

describe('controllers.api.posts', function() {
    describe('GET /api/posts', function() {
        it('exists', function(done) {
            api.get('/posts')
                .expect(200)
                .end(done)
        })
    })
})