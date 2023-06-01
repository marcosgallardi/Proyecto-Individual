require("dotenv").config();
const { API_KEY } = process.env;

const axios = require("axios");
const { Dog } = require("../db");

const getDogsFilter = async (q) => {
  try {
    let dogsDB = await Dog.findOne({ where: { name: q } });
    let { data } = await axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${q}`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );

    if (!data) {
      return dogsDB;
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }

  /* let dogsApi = await getDogs();

 let aux = JSON.stringify(dogsApi);

  let dogsFilter = aux.filter((perro) => {
    return perro.name.toLowerCase() === name.toLowerCase();
  });
  console.log(dogsFilter)
  return dogsFilter;*/
};

module.exports = getDogsFilter;
