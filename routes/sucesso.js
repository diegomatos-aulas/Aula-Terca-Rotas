let express = require("express");
let sucessoRouter = express.Router();

sucessoRouter.get("/", (request, response) => {
  response.send("Sucesso")
});

module.exports = sucessoRouter;