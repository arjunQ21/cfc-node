const mongoose = require("mongoose") ;

const postSchema = mongoose.Schema({

content: String,
createdAt: Date,
createdBy: String,

})

const Post = mongoose.model("Post", postSchema)

module.exports = Post