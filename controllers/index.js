var router = require('express').Router()
var bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(require('../auth'))
router.use('/posts', require('../controllers/api/posts'))
router.use('/sessions', require('../controllers/api/sessions'))
router.use('/users', require('../controllers/api/users'))
router.use(require('./static'))

module.exports = router