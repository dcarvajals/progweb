const express = require("express");
const app = express();
const path = require("path");
const router = express.Router

// colocar el nombre del archivo html a visualizar
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views/pg_02.html"));
});


app.listen(3000, () => {
    console.log("SERVIDOR INICIADO EN PUERTO 8080!!");
});
