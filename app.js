const express = require("express");

const app = express();

app.use("/", express.static("./public"));
app.use(express.urlencoded({extended:true}))

app.get("/", (request, response) => {
  console.log("Os parametros são:");
  console.log(request.query);
});

app.get("/buscar/:nome", (request, response) => {
  console.log(request.params);
});

app.post("/", (request, response) => {
  console.log(request.body);
  response.send("Tudo certo !")
});

app.listen(80, () => {
  console.log("Servidor está ligado !!!")
})