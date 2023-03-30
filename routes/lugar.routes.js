var router = require("express").Router();

const lugar = require("../controllers/lugar.controller.js");

//http://localhost:9595/algoticket/lugar
router.route("/")
  .get(lugar.findAll) // Recuperar todos las lugares
  .post(lugar.create) // Crear una nueva lugar
  .delete(lugar.deleteAll); // Eliminar todos las lugares de la base de datos

// Crear muchos lugares
router.post("/bulk", lugar.bulkCreate); //http://localhost:9595/algoticket/lugar/bulk

//http://localhost:9595/algoticket/lugar/[id]
router.route("/:id")
  .get(lugar.findOne) // Encontrar lugar por id
  .put(lugar.update)  // Acutalizar lugar por id
  .delete(lugar.delete); // Eliminar un lugar por id

module.exports = router;
