const express = require("express")

const router = express.Router() ;

router.get("/", function(req, res){
    console.log("New request found") ;
    res.send("Hello There from here")
})
router.post("/", function(req, res){
    console.log("New POST request") ;
    res.send("Hello from post request")
})

module.exports = router ;