const { Router } = require("express");
const getDogs = require("../controllers/getDogs");

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

module.exports = router;
