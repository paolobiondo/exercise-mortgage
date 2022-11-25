const {Router} = require('express')
const bankController = require("../controllers/bank.controller") 

const router = Router()

router.post('/add',bankController.addBank)

module.exports = router