var db = require('../../db')

describe('create post', function() {
    it('login and create new post', function() {
        browser.get('http://localhost:3001')
        element(by.css('.login')).click()

        //click register button
        element(by.css('nav .register')).click()

        //set and send form registration.
        var randomNumber = Math.floor(Math.random() * 1000)
        element(by.model('username')).sendKeys('a_' + randomNumber)
        element(by.model('password')).sendKeys('a')
        element(by.css('form .btn')).click()

        //click login button
        element(by.css('nav .login')).click()

        //set and send form login.
        element(by.model('username')).sendKeys('a_' + randomNumber)
        element(by.model('password')).sendKeys('a')
        element(by.css('form .btn')).click()

        //put new myTwitt on web
        var post = 'my new post' + Math.random()
        element(by.model('postBody')).sendKeys(post)
        element(by.css('form .btn')).click()


        //user should see your mytweet like first

    })
    afterEach(function() {
        // db.connection.db.dropDatabase()
    })
})