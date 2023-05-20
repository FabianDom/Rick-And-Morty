import axios from "axios";
export default function addPersonaje(character) {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_PERSONAJE",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function deletePersonaje(id) {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "DELETE_PERSONAJE",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
export function filterCards(gender) {
  return {
    type: "FILTER",
    payload: gender,
  };
}
export function orderCards(id) {
  return {
    type: "ORDER",
    payload: id,
  };
}
