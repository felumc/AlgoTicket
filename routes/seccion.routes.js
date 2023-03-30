var router = require("express").Router();

const seccion = require("../controllers/seccion.controller.js");

//http://localhost:9595/algoticket/seccion
router.route("/")
  .get(seccion.findAll) // Recuperar todos las secciones
  .post(seccion.create) // Crear una nueva seccion
  .delete(seccion.deleteAll); // Eliminar todos las secciones de la base de datos

// Crear muchos secciones
router.post("/bulk", seccion.bulkCreate); //http://localhost:9595/algoticket/seccion/bulk

//http://localhost:9595/algoticket/seccion/[id]
router.route("/:id")
  .get(seccion.findOne) // Encontrar seccion por id
  .put(seccion.update) // Acutalizar seccion por id
  .delete(seccion.delete); // Eliminar un seccion por id

// Encontrar seccion por tipo
//router.get("/seccion_t/:tipo", seccion.findByTipo); //http://localhost:9595/algoticket/seccion/seccion_t/[tipo]

module.exports = router;