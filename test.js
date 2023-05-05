// importing express
const express = require("express");
const routes = require("./routes")

const httpServer = express();

httpServer.use(routes)

httpServer.listen(3000, function () {
  console.log("Server listening on port 3000");
});
