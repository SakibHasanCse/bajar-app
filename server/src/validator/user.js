import { check } from 'express-validator'

export const createUser = [
    check('name')
        .isLength({ min: 2 })
        .withMessage('Name must be at least 2 chars long'),
    check('email')
        .isEmail()
        .withMessage('Email must be valid email address'),
    check('password')
        .isStrongPassword()
        .withMessage('Password must be strong'),

]
