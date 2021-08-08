import express from 'express'
const router = express.Router()
const controller = require('../../../database/controllers/AccountController')

router.post('/register/accounts', controller.register)

module.exports = router
