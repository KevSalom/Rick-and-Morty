import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, CLEAN } from "./action";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { myFavorites: action.payload, allCharacters: action.payload };
    case REMOVE_FAV:
      const newFav = state.myFavorites.filter(
        (ch) => ch.id !== action.payload.idDel
      );
      return {
        myFavorites: newFav,
        allCharacters: action.payload.allCharacter,
      };
    case FILTER:
      const genderGharacters = state.allCharacters.filter(
        (el) => el.gender === action.payload
      );
      return { ...state, myFavorites: genderGharacters };
    case ORDER:
      return {
        ...state,
        myFavorites: state.myFavorites.sort((a, b) =>
          action.payload === "A" ? a.id - b.id : b.id - a.id
        ),
        allCharacters: [...state.allCharacters],
      };
    case CLEAN:
      return {
        ...state,
        myFavorites: [...state.allCharacters],
      };
    default:
      return { ...state };
  }
};
