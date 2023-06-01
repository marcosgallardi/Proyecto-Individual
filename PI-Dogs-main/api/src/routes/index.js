const { Router } = require("express");
const getDogs = require("../controllers/getDogs");
const getDogsByBreed = require("../controllers/getDogsByBreed");
const getDogsFilter = require("../controllers/getDogsFilter");
const postDogs = require("../controllers/postDogs");
const { getTemperaments } = require("../controllers/getTemperaments");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", async (req, res) => {
  try {
    let dogs = await getDogs();

    res.status(200).json(dogs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/dogs/:idRaza", async (req, res) => {
  let { idRaza } = req.params;
  try {
    let dogsBreed = await getDogsByBreed(+idRaza);

    res.status(200).json(dogsBreed);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/search", async (req, res) => {
  let { q } = req.query;

  try {
    let dogsFilter = await getDogsFilter(q);
    res.status(200).json(dogsFilter);
  } catch (error) {
    res.status(404).json({ error: "Raza inexistente" });
  }
});

router.post("/dogs", async (req, res) => {
  try {
    let { name, anios, altura, image, peso } = req.body;

    let createDog = await postDogs(name, anios, altura, image, peso);
    res.status(200).json(createDog);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/temperament", async (req, res) => {
  try {
    let temperaments = await getTemperaments();
    res.status(200).json(temperaments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
