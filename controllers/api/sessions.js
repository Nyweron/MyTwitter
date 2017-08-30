var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')

router.post('/', function(req, res, next) {
         console.log("session.js req.body:",req.body)
    User.findOne({ email: req.body.email })
        .select('password')
        .select('username')
     //   .select('email')
        .select('_id')
        .exec(function(err, user) {
            if (err) { return next(err) }
            if (!user) { return res.send(401) }
            bcrypt.compare(req.body.password, user.password, function(err, valid) {
                if (err) { return next(err) }
                if (!valid) { return res.send(401) }

                console.log("session.js user:",user)
                var token = jwt.encode({ id: user._id, username: user.username }, config.secret)
                res.send(token)
            })
        })
})

module.exports = router