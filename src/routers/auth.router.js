const router = require('express').Router()
const {
    signup/*,
    login,
check */} = require('../controllers/auth.controller')
router.post('/signup', signup)
module.exports = router 