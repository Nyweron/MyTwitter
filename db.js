var mongoose = require('mongoose')
var url = process.env.MONGODB_URI || 'mongodb://localhost/socialLocalhost'
mongoose.connect(url, function() {
    console.log('mongodb connected')
})
module.exports = mongoose