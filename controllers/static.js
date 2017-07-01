var express = require('express')
var router = express.Router()
const path = require('path')

router.use(express.static(path.join(__dirname, './../', 'assets')))
router.use(express.static(path.join(__dirname, './../', 'layouts')))
router.use(express.static(path.join(__dirname, './../', 'templates')))

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './../', 'layouts/app.html'))
})

module.exports = router