import express from 'express'
import productService from '../services/product'

const router = express.Router()

router.post('/product', productService.createProduct)
router.put('/product/:id', productService.updateProduct)
router.get('/product/:id', productService.singleproduct)
router.delete('/product/:id', productService.deleteProduct)

export default router