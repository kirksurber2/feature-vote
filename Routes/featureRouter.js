const express = require('express')
const featureRouter = express.Router()
const Feature = require('../Models/feature')

featureRouter.post('/new-feature', async (req, res, next) => {
    try{
        req.body.createdBy = req.auth._id
        const findFeature = await Feature.findOne({title: req.body.title})
        if(findFeature){
            res.status(403).send("That feature is already listed")
            return next(new Error("That feature is already listed"))
        }
        const newFeature = new Feature(req.body)
        const saveFeature = await newFeature.save()
        return res.status(201).send("Your feature has been added")
        
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})
// GET All Features
featureRouter.get('/', async (req, res, next) => {
    try{
        const getFeatures = Feature.find()
        if(!getFeatures){
            res.status(403)
            return next(new Error("There are no features to display"))
        }
        res.status(200).send(getFeatures)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})
// GET One Feature by ID
featureRouter.get('/:featureId', async (req, res, next) => {
    try{
        req.body.createdBy = req.auth._id
        const feature = await Feature.findById({_id: req.body.id})
        if(!feature){
            res.status(403)
            return next (new Error("That feature can't be found"))
        }
        res.status(200).send(feature)
    }
    catch(err){
     res.status(500)
     return next(err)
    }
})
// GET Features by User ID
featureRouter.get('/:createdBy', async (req, res, next) => {
    try{
        const userFeatures = await Feature.find({createdBy: req.params.createdBy})
        if(!userFeatures){
            res.status(403)
            return next(new Error("There were no features found by this user"))
        }
        res.status(201).send(userFeatures)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

module.exports = featureRouter