const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  // endpoint http://localhost:3001 asi llega
  try {
    const { id } = req.params;
    const response = await axios(`${URL}${id}`);
    const character = {
      id: response.data.id,
      name: response.data.name,
      status: response.data.status,
      species: response.data.species,
      origin: response.data.origin,
      image: response.data.image,
      gender: response.data.gender,
    };
    if (character) {
      res.status(200).json(character);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getCharById };

// function getCharById(res, id) {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       const character = {
//         id: id,
//         name: response.data.name,
//         gender: response.data.gender,
//         species: response.data.species,
//         origin: response.data.origin.name,
//         image: response.data.image,
//         status: response.data.status,
//       };
//       console.log(character);

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
// }

// module.exports = getCharById;
