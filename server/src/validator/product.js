import { body, check } from 'express-validator'

export const createProduct = [
    check('title')
        .isLength({ min: 4 })
        .withMessage('Title must be at least 4 chars long'),
    check('description')
        .isLength({ min: 4 })
        .withMessage('Description must be at least 4 chars long'),
]
