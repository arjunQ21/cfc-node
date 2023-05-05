// importing express
const express = require("express");

const httpServer = express();

httpServer.get("/", function(req, res){
    console.log("New request found") ;
    res.send("Hello There from here")
})
httpServer.post("/", function(req, res){
    console.log("New POST request") ;
    res.send("Hello from post request")
})

httpServer.listen(3000, function () {
  console.log("Server listening on port 3000");
});
