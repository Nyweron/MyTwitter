var db = require('../db')
var user = db.Schema({
   // _id: { type: String, require: false },
    email: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true, select: false },
    firstname: { type: String, require: false },
    lastname: { type: String, require: false },
})
module.exports = db.model('User', user)