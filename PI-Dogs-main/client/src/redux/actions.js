import axios from "axios";
import { GET_TEMPERAMENTS, GET_DOGS } from "./actionsType";

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get("http://localhost:3001/temperament");

      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const getDogs = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: GET_DOGS,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
