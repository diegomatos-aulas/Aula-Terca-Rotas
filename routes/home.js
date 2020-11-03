const { response } = require("express");
let express = require("express");
let homeRouter = express.Router();

homeRouter.get("/", (request, response) => {
  console.log("Os parametros são:");
  console.log(request.query);
});

homeRouter.get("/buscar/:nome", (request, response) => {
  console.log(request.params);
});

homeRouter.post("/", (request, response) => {
  const {nome} = request.body;
  if (nome == "" || nome == undefined || nome == null) {
    return response.redirect("/error.html")
  } 

  response.redirect("/sucesso.html")
});

homeRouter.delete("/", (request, response) => {
  response.send(`Foi deletado: ${request.body.nome}`)
})

module.exports = homeRouter;