var router = require("express").Router();

const boleto = require("../controllers/boleto.controller.js");

//http://localhost:9595/algoticket/boleto
router.route("/")
  .get(boleto.findAll) // Recuperar todos los boletoes
  .post(boleto.create) // Crear una nueva boleto
  .delete(boleto.deleteAll) // Eliminar todos los boletoes de la base de datos
  
router.post("/bulk", boleto.bulkCreate); //http://localhost:9595/algoticket/boletos/bulk

//http://localhost:9595/algoticket/boleto/[id]
router.route("/:id")
  .get(boleto.findOne) // Encontrar boleto por id
  .put(boleto.update) // Acutalizar boleto por id
  .delete(boleto.delete) // Eliminar un boleto por id

// Encontrar boletos por evento
router.get("/boleto_e/:id", boleto.findByEvent); //http://localhost:9595/algoticket/boleto_e/[id]

// Encontrar boletos por usuario
router.get("/boleto_u/:id", boleto.findBoletosUsuario); //http://localhost:9595/algoticket/boleto_u/[id]

module.exports = router;
