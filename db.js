var mongoose = require('mongoose')
var url = process.env.MONGODB_URI || 'mongodb://localhost/socialLocalhost'

// When successfully connected
mongoose.connect(url, function() {
    console.log('mongodb connected')
})

// If the connection throws an error
mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');
});

module.exports = mongoose