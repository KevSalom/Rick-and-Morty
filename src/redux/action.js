export const ADD_FAV = "ADD FAV";
export const REMOVE_FAV = "REMOVE FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER"

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const removeFav = (character) => {
  return {
    type: REMOVE_FAV,
    payload: character,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
