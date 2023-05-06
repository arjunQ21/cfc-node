const express = require("express");
const router = express.Router();
const createNewPost = require("./functions");
const mongoose = require("mongoose");
const Post = require("./db/posts");

// creating new Post
router.post("/", function (req, res) {
  createNewPost(req.body.postContent, req.body.postCreatedBy)
    .then(function (post) {
      res.send(post);
      // res.send("Post Created successfully");
    })
    .catch(function (error) {
      res.send("Error Creating Post");
    });
});

// getting all posts from database
router.get("/", function (req, res) {
  Post.find()
    .then(function (posts) {
      res.send(posts);
    })
    .catch(function (error) {
      res.send("Error getting posts: " + error);
    });
});

// delete a post
router.delete("/:postId", function (req, res) {
  Post.deleteOne({_id: req.params.postId})
  .then(function(post){
    console.log(post)
    res.send("Deleted") ;
  })
  .catch(function(err){
    res.send("Error deleting: "+ err) ;
  })
});

module.exports = router;
