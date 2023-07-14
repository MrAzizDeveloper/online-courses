import express from 'express'
import {create} from 'express-handlebars'
import mongoose from 'mongoose'
import flash from 'connect-flash'
import session from 'express-session'
import varMiddleware from './midleware/var.js'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import path from 'path'
import * as dotenv from 'dotenv'
// ROUTES
import AuthRoutes from './routes/auth.js'
import CoursesRoutes from './routes/course.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())
app.use(session({secret:'1234', resave: false, saveUninitialized: false}))
app.use(flash())
app.use(varMiddleware)

const hbs = create({defaultLayout: 'main', extname: 'hbs'})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(AuthRoutes);
app.use(CoursesRoutes)
  mongoose.set('strictQuery', false)
  mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true},).then(()=>{console.log('MONGO DB connected')}).catch((err)=>{console.log(err);})

const PORT = process.env.PORT||4000
app.listen(PORT, ()=> console.log(`Server is running on port:${PORT}`))