require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Dog } = require("../db");
const getImages = require("./getImage");

const getDogsByBreed = async (idRaza) => {
  try {
    let finder = await Dog.findByPk(idRaza);

    let { data } = await axios.get(
      `https://api.thedogapi.com/v1/breeds/${idRaza}`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );

    let aux = { ...data, image: await getImages(data.reference_image_id) };
    if (!data) {
      return finder;
    }

    return aux;
  } catch (error) {
    throw error;
  }
};

module.exports = getDogsByBreed;
