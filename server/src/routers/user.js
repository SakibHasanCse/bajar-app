import express from 'express'
import userService from '../services/user'
import { createUser } from '../validator/user'
import { validate } from '../validator/validation'


const router = express.Router()

router.post('/signUp', createUser, validate, userService.createUser);


export default router