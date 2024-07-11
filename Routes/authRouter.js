const express = require('express')
const authRouter = express.Router()
const User = require('../Models/user')
const {expressjwt} = require('express-jwt')
const jwt = require('jsonwebtoken')

//Signup
authRouter.post('/signup', async (req, res, next) => {
    try{
        const findUser = await User.findOne({email: req.body.email})
        if(findUser){
            res.status(403).send("This email is already in use")
            return next(new Error('Email is already taken'))
        }
        // Hash and Salt Password
        const newUser = new User(req.body)
        const saveUser = await newUser.save()
        const token = jwt.sign(saveUser.toObject(), process.env.SECRET)
        return res.status(201).send({ user: saveUser, token: token })
      
        // Password
      
        // const salt = await expressjwt.salt(13)
       // const hash = await expressjwt.hash(salt, {password: req.body.password} )

    }
    catch(err){
        res.status(500)
        return next(err)
    }
})
//Login

authRouter.post('/login', async (req, res, next) => {
    try{
        const findUser = await User.findOne({email: req.body.email})
        if(!findUser) {
            res.status(403)
            return next(new Error("Incorrect Email or Password"))
        }
        if(req.body.password !== findUser.password){
            res.status(403)
            return next(new Error("Incorrect Email or Password"))
        }
        const token = jwt.sign(findUser.toObject(), process.env.SECRET)
        return res.status(201).send({findUser, token})
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

module.exports = authRouter