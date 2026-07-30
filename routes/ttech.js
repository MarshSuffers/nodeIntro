const myController = require("../controllers/ttech.js");
const routes = require("express").Router();

routes.get("/ttech", myController.ttechFunction);

module.exports = routes;
