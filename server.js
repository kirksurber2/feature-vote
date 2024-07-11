const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const morgan = require('morgan')
require('dotenv').config()
const {expressjwt} = require('express-jwt')
const cors = require('cors')
const mongoose = require('mongoose')

// Middleware *********************
app.use(express.json())
app.use(morgan('dev'))
app.use(
    cors({
        origin: ['https:localhost:9000/', 'https://app.workflow-sms.com', 'https://workflows-sms.com'],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        origin: true
    })
)

async function connectToDB () {
    // MongoDB Connect
    try {
        await mongoose.connect(process.env.MONGODBTEST)
        console.log("Connected to DB")
    }catch(error) {
        console.log(error)
    }
}
connectToDB()
// Initial Routes

// Protected Routes
//app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/auth', require('./Routes/authRouter.js'))
app.use('/api/features', require('./Routes/featureRouter.js'))
app.use('/api/company_id', require('./Routes/companyRouter.js'))

// Error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})



app.listen(9000, () => {
    console.log("The Server is Running on port 9000")
})
