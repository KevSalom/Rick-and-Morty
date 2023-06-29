import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action";
const initialState = {
  myFavorites: [],
  allCharacters: []
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const allCharacters = [...state.allCharacters, action.payload];
      return { myFavorites: allCharacters, allCharacters:allCharacters  };
    case REMOVE_FAV:
      const favFilterId = state.myFavorites.filter(
        (el) => el.id !== action.payload.id);
      const  allFilterId =  state.allCharacters.filter(
        (el) => el.id !== action.payload.id);
      return { myFavorites:favFilterId, allCharacters:allFilterId };
    case FILTER:
      const genderGharacters = state.allCharacters.filter(
        (el) => el.gender === action.payload);
        return {...state, myFavorites:genderGharacters };
    case ORDER:
      const sortCharacters = state.allCharacters;

        if(action.payload === "A"){
          sortCharacters.sort(
            (a,b)=>a.id - b.id);
        } else if (action.payload === "D" ) {
          sortCharacters.sort(
            (a,b)=> b.id - a.id);
        }
      return {...state, myFavorites:sortCharacters };
    default:
      return { ...state };
  }
};

