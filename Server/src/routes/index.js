const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById.js");
const { controlLogin } = require("../controllers/login.js");
const { postFav, deleteFav } = require("../controllers/handleFavorites.js");
const routes = Router();
routes.get("/character/:id", getCharById);

routes.get("/login", controlLogin);

routes.post("/fav", postFav);

routes.delete("/fav/:id", deleteFav);
module.exports = routes;
