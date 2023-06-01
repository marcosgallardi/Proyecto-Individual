const {Dog} = require("../db");

const postDogs = async (name, anios, altura, image, peso) => {
    console.log(name, anios, altura, image, peso)
  try {
    if (!name || !anios || !altura || !image || !peso) {
      return "faltan datos";
    }

    let newDog = await Dog.create({ name, anios, altura, image, peso });
    return newDog;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = postDogs;
