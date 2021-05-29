import express from 'express'
import { isAuth } from '../middleware/auth'
import categoryService from '../services/Category/category'
import { createCategory } from '../validator/category'
import { validate } from '../validator/validation'


const router = express.Router()

router.route('/category')
    .post(isAuth, createCategory, validate, categoryService.createCategory)
    .get(categoryService.allCategory)

router.route('/category/:slug')
    .put(isAuth, categoryService.updateCategory)
    .get(categoryService.singleCategory)
    .delete(isAuth, categoryService.deleteCategory);

export default router