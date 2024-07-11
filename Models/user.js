const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase:true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: 12
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    likes: [String],
    disLikes: [String],
    role: {
        type: String,
        enum: ["Voter", "Business"],
        default: "Voter"
    },
    featuresCreated: [{
        type: Schema.Types.ObjectId,
        ref: "Feature"
    }]
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)