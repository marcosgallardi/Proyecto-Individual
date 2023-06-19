//require("dotenv").config();
//const { API_KEY } = process.env;
//const axios = require("axios");
const { Dog } = require("../db");
const getDogs = require("./getDogs");
//const getImages = require("./getImage");

const getDogsFilter = async (q) => {
  try {
    let dogsDB = await Dog.findOne({ where: { name: q } });
    let dogsApi = await getDogs();

    let filterDogs = dogsApi.filter((perro) => {
      return perro.name.toLowerCase().includes(q);
    });

    /*  let { data } = await axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${q}`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );

    for (const perro in data) {
      if (data[perro].reference_image_id) {
        data[perro].image = await getImages(data[perro].reference_image_id);
      } else {
        data[perro].image = "https://i.imgur.com/ZoOyqYt.jpg";
      }
    }
*/
    //let aux = { ...data, image: await getImages(data.reference_image_id) };

    if (!filterDogs) {
      return dogsDB;
    }
    return filterDogs;
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
