const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

const adn_routes = require("./routes/adn");

// MIDDLEWEARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Carpeta estatica de archivos minificados
app.use(express.static(path.join(__dirname, "client/dist/prueba")));

// RUTAS
app.use("/api", adn_routes);

app.get("/", (req, res) => {
  res.send("Invalid endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/prueba/index.html"));
});



module.exports = app;
