const {Router} = require('express')
const prospectController = require("../controllers/prospect.controller") 

const router = Router()

router.post('/add',prospectController.addProspect)
router.get('/prospect',prospectController.getProspect)


module.exports = router