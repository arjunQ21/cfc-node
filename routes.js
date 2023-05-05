const express = require("express")
const router = express.Router() ;

router.get("/hi", function(req, res){
    console.log(req.query)
    res.send("Hello, " + req.query.name) ;
})

router.get("/bye", function(req, res){
    res.send("Bye Bye")
})


module.exports = router ;