import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectionDb from './db/dbConnect'


const app = express()
app.use(dotenv())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


const url = process.env.DB_URL
connectionDb(url)

export default app