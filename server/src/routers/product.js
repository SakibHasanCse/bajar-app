import express from 'express'
import productService from '../services/product'
import { createProduct } from '../validator/product'
import { validate } from '../validator/validation'


const router = express.Router()

router.route('/product')
    .post(createProduct, validate, productService.createProduct)
    .get(productService.allproducts)

router.route('/product/:id')
    .put(productService.updateProduct)
    .get(productService.singleproduct)
    .delete(productService.deleteProduct)

export default router