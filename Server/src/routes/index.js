const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById.js");
const login = require("../controllers/login.js");
const postFav = require("../controllers/postFav.js");
const deleteFav = require("../controllers/deleteFav.js");
const postUser = require("../controllers/postUser.js");
const routes = Router();

routes.get("/character/:id", getCharById);

routes.post("/login", postUser);

routes.get("/login", login);

routes.post("/fav", postFav);

routes.delete("/fav/:id", deleteFav);

module.exports = routes;
