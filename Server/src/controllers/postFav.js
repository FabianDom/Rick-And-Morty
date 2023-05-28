// CONTROLADOR PARA LOS FAVORITOS
const { Favorite } = require("../DB_connection");

async function postFav(req, res) {
  const { name, origin, status, image, species, gender, id } = req.body;

  try {
    if (!name || !origin || !status || !image || !species || !gender || !id) {
      return res.status(401).send("Faltan datos");
    }
    await Favorite.findOrCreate({
      where: {
        id: id,
        name: name,
        origin: origin,
        status: status,
        image: image,
        species: species,
        gender: gender,
      },
    });
    const favoritesAll = await Favorite.findAll();
    return res.status(200).json(favoritesAll);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = postFav;
