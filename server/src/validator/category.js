import { body, check } from 'express-validator'

export const createCategory = [
    check('name')
        .isLength({ min: 2 })
        .withMessage('Name must be at least 2 chars long')
]
