import { validationResult } from 'express-validator'
export const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const validateError = []
        console.log("errors", errors)
        errors.array().map(err => validateError.push({ [err.param]: err.msg }))

        return res.status(422).json({
            errors: validateError
        })
    }
    return next();

}