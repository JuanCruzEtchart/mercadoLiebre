const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

/*app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));*/

app.listen(process.env.PORT || 3000, function () {
  console.log("Servidor corriendo en puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.post("/login", (req, res) => {
  console.log("Ingresaste correctamente!");
  res.redirect("/");
});

app.post("/register", (req, res) => {
  console.log("Te registraste correctamente!");
  res.redirect("/");
})
