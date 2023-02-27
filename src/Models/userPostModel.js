const mongoose = require("mongoose")

const userPostSchema = new mongoose.Schema({

    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    comments: [CommentSchema]

}, { timestamps: true })

module.exports =  mongoose.model("posts" , userPostSchema)