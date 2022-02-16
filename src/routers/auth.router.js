const router = require('express').Router()
const {
    signup,
    login,
    check
} = require('../controllers/auth.controller')
const {checkAuth} = require('../utils/auth')

router.post('/signup', signup)
router.post('/login', login)
router.get('/check', checkAuth, check)
module.exports = router 