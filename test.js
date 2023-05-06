const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://cfc-demo-user:asdfasdf1@cluster0.i35rvgk.mongodb.net/cfc-db",
    // locally
    // "mongodb://127.0.0.1:27017/db-name"
    {},
  )
  .then(function () {
    console.log("Connected!!");
    const Post = require("./db/posts");
    Post.create({
      content: "My Test Post",
      createdAt: Date.now(),
      createdBy: "Test Person",
    }).then(function(post){
      console.log("Post Created")
    }).catch(function(error){
      console.log("Error creating post: "+ error)
    })
    // console.log(Post);
  })
  .catch(function (e) {
    console.log("Error connecting: " + e.toString());
  });
