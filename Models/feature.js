const mongoose = require('mongoose')
const Schema = mongoose.Schema

const featureSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    likes: [String],
    disLikes: [String],
    comments: [{
        title: String,
        description: String,
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    }],
    category: {
        type: String,
        enum: ["New", "Update", "Remove"],
        default: "New"
    },
    status: {
        type: String,
        enum: ["Completed", 'In-Testing', "In-Development", "Awaiting-Votes" ],
        default: "Awaiting-Votes"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

module.exports = mongoose.model('Feature', featureSchema)