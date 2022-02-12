const router = require('express').Router()
const {
    signup,
    login,
    check} = require('../controllers/auth.controller')
router.post('/signup', signup)
router.post('/login', login)
router.get('/check', check)
module.exports = router 