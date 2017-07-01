var jwt = require('jwt-simple')
var config = require('./config')

module.exports = function(req, res, next) {
        if (req.headers['x-auth']) {
            req.auth = jwt.decode(req.headers['x-auth'], config.secret)
        }
        next()
    }
    // The above middle layer causes
    // Append the auth object to requests and is responsible
    // for searching information about the user.