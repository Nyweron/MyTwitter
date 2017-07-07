describe('posts.svc', function() {
    beforeEach(module('app'))
    var PostsSvc, $httpBackend

    beforeEach(inject(function(_PostsSvc_, _$httpBackend_) {
        PostsSvc = _PostsSvc_
        $httpBackend = _$httpBackend_
    }))

    afterEach(function() {
        $httpBackend.flush()
    })

    describe('#fetch', function() {
        beforeEach(function() {
            $httpBackend.expect('GET', '/posts')
                .respond([
                    { username: 'nyweron', body: 'first post' },
                    { username: 'nyweron', body: 'second post' }
                ])
        })

        it('gets 2 posts', function() {
            PostsSvc.fetch().then(function(posts) {
                expect(posts.data).to.have.length(2)
            })
        })
    })

    describe('#create', function() {

    })



})