const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_PERSONAJE":
      return { ...state, myFavorites: payload, allCharacters: payload };

    case "DELETE_PERSONAJE":
      return { ...state, myFavorites: payload };
    case "FILTER":
      const filterChar = [...state.allCharacters].filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: filterChar,
      };
    case "ORDER":
      const orderChar = [...state.allCharacters];
      if (payload === "Ascendente") {
        orderChar.sort((a, b) => a.id - b.id);
      }
      if (payload === "Descendente") {
        orderChar.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: orderChar,
      };

    default:
      return { ...state };
  }
}
export default reducer;
