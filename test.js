// importing express
const express = require("express");
const routesFromAnotherFile = require("./routes")

const httpServer = express();

httpServer.use(routesFromAnotherFile)

httpServer.listen(3000, function () {
  console.log("Server listening on port 3000");
});
