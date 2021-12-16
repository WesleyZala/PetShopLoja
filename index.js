const express = require("express");
const consign = require ('consign')
const { get } = require("express/lib/response");

const app = express();

app.listen(3000, () => console.log("Servidor rodando na porta 3000!"));

