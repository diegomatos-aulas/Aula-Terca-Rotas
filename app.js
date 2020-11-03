const express = require("express");

const app = express();

app.use("/", express.static("./public"));
app.use(express.urlencoded({extended:false}))

const rotaHome = require("./routes/home.js");
/* const rotaSucesso = require("./routes/sucesso.js");
const rotaError = require("./routes/error.js"); */

app.use("/raiz", rotaHome);
/* app.use("/sucesso", rotaSucesso);
app.use("/error", rotaError); */

app.listen(80, () => {
  console.log("Servidor está ligado !!!")
})