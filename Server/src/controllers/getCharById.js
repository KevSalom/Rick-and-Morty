const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;

try {

  const response = await axios(URL+id);
  const {data} = response;

  const character = {
    id: data.id,
    name: data.name,
    gender: data.gender,
    origin: data.origin,
    image: data.image,
    status: data.status,
    sprecies: data.sprecies,
  }

  return res.status(200).json(character)

} catch (error) {
  if(error.response.data.error === "Character not found") {
    return res.status(404).json({ error: error.response.data.error})
  } else {
    return res.status(500).send('Server Error')}
  };
}

module.exports = getCharById;