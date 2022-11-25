const {Router} = require('express')
const productController = require("../controllers/product.controller") 

const router = Router()

router.post('/add',productController.addProduct)

module.exports = router