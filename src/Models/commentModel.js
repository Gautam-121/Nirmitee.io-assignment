const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
        // always require all comments to point to the top post, for easy query of all comments whether nested or not
        postId: {
            type: ObjectId,
            ref: "posts",
            required: true,
        },

        parentCommentId: {
            type: ObjectId,
            ref: "comments",
            required: false, // if not populated, then its a top level comment
        },

        username: {
            type: String,
            required: true,
        },

        detail: {
            type: String,
            required: true,
        },
    },
    { timestamps : true }
);
