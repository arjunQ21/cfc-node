// importing express
const express = require("express");

const httpServer = express();

httpServer.get("/", function(req, res){
    console.log("New request found") ;
    res.send("Hello There")
})

httpServer.listen(3000, function () {
  console.log("Server listening on port 3000");
});
