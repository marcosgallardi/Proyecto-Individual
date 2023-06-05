const {Dog} = require("../db");
const {Temperament} = require("../db");

const postDogs = async (name, anios, altura, image, peso,temperaments) => {

 

  /*let newDog = await Dog.create({
    name,
    anios,
    altura,
    image,
    peso,
    temperament: temperamentDb,
  });
  return newDog;
} */

  try {
    if (!name || !anios || !altura || !image || !peso || !temperaments) {
      return "faltan datos";
    }

    let newDog = await Dog.create({ name, anios, altura, image, peso });
    await newDog.addTemperaments(temperaments);
    return newDog;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = postDogs;
