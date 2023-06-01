require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Dog } = require("../db");

const getDogsByBreed = async (idRaza) => {
  
  try {

    let finder = await Dog.findByPk(idRaza);

    let { data: breedDetail } = await axios.get(
      `https://api.thedogapi.com/v1/breeds/${idRaza}`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );

    if (!breedDetail) {
      return finder;
    }

    return breedDetail;
  } catch (error) {
    throw error;
  }
};

module.exports = getDogsByBreed;
