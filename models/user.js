var db = require('../db')
var user = db.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true, select: false }
})
module.exports = db.model('User', user)