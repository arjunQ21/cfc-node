const mongoose = require("mongoose");
const createNewPost = require("./functions")
mongoose
  .connect(
    "mongodb+srv://cfc-demo-user:asdfasdf1@cluster0.i35rvgk.mongodb.net/cfc-db",
    // locally
    // "mongodb://127.0.0.1:27017/db-name"
    {},
  )
  .then(function () {
    console.log("Connected!!");

  createNewPost("This is second post", "Shyam karki") ;
    // console.log(Post);
  })
  .catch(function (e) {
    console.log("Error connecting: " + e.toString());
  });


