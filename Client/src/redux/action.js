import axios from "axios";
export const ADD_FAV = "ADD FAV";
export const REMOVE_FAV = "REMOVE FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const CLEAN = "CLEAN"

const URL = "http://localhost:3001/rickandmorty/fav";

export const addFav = (character) => {
  return async function (dispatch) {
    try {
      const reqFav = await axios.post(URL, character);
      return dispatch({
        type: ADD_FAV,
        payload: reqFav.data,
      });
    } catch (error) {
window.alert('No se pudo añadir al personaje como favorito')
    }
  };
};

export const removeFav = ({ id }) => {
  return async function (dispatch) {
    try {
      const delFav = await axios.delete(URL + "/" + id);
      return dispatch({
        type: REMOVE_FAV,
        payload: {idDel:id, allCharacter : delFav.data},
      });
    } catch (error) {
window.alert('No se pudo eliminar al persona como favorito')
    }
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

export const cleanFilterCards = () => {
  return {
    type: CLEAN
  };
};
