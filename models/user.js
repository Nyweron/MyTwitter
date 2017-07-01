var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/socialLocalhost')

var user = new mongoose.Schema({
    username: String,
    password: { type: String, select: false }
})

module.exports = mongoose.model('User', user)