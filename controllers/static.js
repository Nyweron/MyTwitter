var express = require('express')
var router = express.Router()
const path = require('path')

router.use(express.static(path.join(__dirname, './../', 'assets')))

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './../', 'layouts/posts.html'))
})

module.exports = router