var router = require("express").Router();

const evento = require("../controllers/evento.controller.js");

//http://localhost:9595/algoticket/evento
router
  .route("/")
  .get(evento.findAll) // Recuperar todos las eventos
  .post(evento.create) // Crear una nueva evento
  .delete(evento.deleteAll); // Eliminar todos las eventos de la base de datos

// Crear muchos evento
router.post("/bulk", evento.bulkCreate); //http://localhost:9595/algoticket/evento/bulk

//http://localhost:9595/algoticket/evento/[id]
router.route("/:id")
  .get(evento.findOne) // Encontrar evento por id
  .put(evento.update) // Acutalizar evento por id
  .delete(evento.delete); // Eliminar un evento por id

module.exports = router;
