const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
    companyName: {
        type: String,
        required: true, 
        lowercase: true,
        trim: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    
    }],
    features: [{
        type: Schema.Types.ObjectId,
        ref: "Feature"
    }],
    phone: {
        type: String,
        required: true,
        min: 10
    },
    email: {
        type: String,
        required: true,
        lowercase:true,
        trim: true
    },
    
})

module.exports = mongoose.model("Company", companySchema)