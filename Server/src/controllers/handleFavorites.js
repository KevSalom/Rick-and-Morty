let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  console.log(myFavorites.length)
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((fav) => fav.id !== Number(id));
  console.log(myFavorites.length)

  if(myFavorites) return res.status(200).json(myFavorites);
  return res.status(404).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
