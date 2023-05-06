const express = require("express");
const router = express.Router();
const createNewPost = require("./functions");
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

module.exports = router;
