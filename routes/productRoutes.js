const express = require('express')
const productController = require('../controllers/productController')
const router = express.Router()

//routes
router.get('/' ,productController.index )

router.get('/:id' , productController.show)

router.post('/' , productController.create)

router.put('/:id', productController.update)

router.delete('/:id', productController.destroy)

module.exports = router