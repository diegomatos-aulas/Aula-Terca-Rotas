let express = require("express");
let errorRouter = express.Router();

errorRouter.get("/", (request, response) => {
  response.send("error")
});

module.exports = errorRouter;