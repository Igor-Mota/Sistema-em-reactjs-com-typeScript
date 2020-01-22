const {Router} = require("express");
const devController = require("./controllers/devController")
const searchController = require("./controllers/seacrhController")
const routes = Router();


routes.get("/devs", devController.index)

routes.post("/devs",devController.store)

routes.get("/search", searchController.index);


module.exports = routes;