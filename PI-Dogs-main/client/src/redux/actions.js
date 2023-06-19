import axios from "axios";
import {
  GET_TEMPERAMENTS,
  GET_DOGS,
  GET_DOG_NAME,
  FILTER_TEMPERAMENTS,
  FILTER_ORIGIN,
  ORDER_ACDC,
  ORDER_WEIGHT,
  GET_DOG_DETAIL,
  LOADING
} from "./actionsType";

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

export const getDogName = (name) => {
  return async function (dispatch) {
    try {
      let { data } = await axios.get(`http://localhost:3001/search?q=${name}`);
      dispatch({
        type: GET_DOG_NAME,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const filterByTemperament = (value) => {
  return {
    type: FILTER_TEMPERAMENTS,
    payload: value,
  };
};

export const filterByOrigin = (value) => {
  return {
    type: FILTER_ORIGIN,
    payload: value,
  };
};

export const orderACDC = (value) => {
  return {
    type: ORDER_ACDC,
    payload: value,
  };
};

export const orderWeight = (value) => {
  return {
    type: ORDER_WEIGHT,
    payload: value,
  };
};

export const getDogDetail = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(`http://localhost:3001/dogs/${+id}`);
      dispatch({
        type: GET_DOG_DETAIL,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const loading = (value) => {
  return {
    type: LOADING,
    payload: value,
  };

}
