import express from 'express'
import userService from '../services/user'
import { createUser, signinUser } from '../validator/user'
import { validate } from '../validator/validation'


const router = express.Router()

router.post('/signup', createUser, validate, userService.createUser);
router.post('/signin', signinUser, validate, userService.loginUser);


export default router