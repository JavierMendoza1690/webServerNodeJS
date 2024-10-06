import * as url from "url";
import express from "express";
import hbs from "hbs";
import 'dotenv/config'


const app = express();
const port = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Fernando Herrera",
    titulo: "Curso Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Fernando Herrera",
    titulo: "Curso Node",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Fernando Herrera",
    titulo: "Curso Node",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

// empezando a correr el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
