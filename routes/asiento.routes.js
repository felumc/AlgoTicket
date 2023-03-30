var router = require("express").Router();

const asiento = require("../controllers/asiento.controller.js");

//http://localhost:9595/algoticket/asiento
router.route("/")
  .get(asiento.findAll) // Recuperar todos los asientos
  .post(asiento.create) // Crear una nueva asiento
  .delete(asiento.deleteAll) // Eliminar todos los asientos de la base de datos

//http://localhost:9595/algoticket/asiento/[id]
router.route("/:id")
  .get(asiento.findOne) // Encontrar asiento por id
  .put(asiento.update) // Acutalizar asiento por id
  .delete(asiento.delete) // Eliminar un asiento por id

// Crear muchos asientos
router.post("/bulk", asiento.bulkCreate); //http://localhost:9595/algoticket/asiento/bulk

// Encontrar asiento por fila
router.get("/fila/:fila", asiento.findByTipo); //http://localhost:9595/algoticket/asiento/fila/[fila]

module.exports = router;
