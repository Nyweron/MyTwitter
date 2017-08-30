var db = require('../db')
var Post = db.model('Post', {
    userID: {type:String, require: true},
    username: { type: String, required: false },
    email: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now }
})

module.exports = Post