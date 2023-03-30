var router = require("express").Router();

// ============= Rol =============
const rol = require("../controllers/rol.controller.js"); 

//http://localhost:9595/algoticket/rol/crear
router.post("/crear", rol.create); // Crear un nuevo rol

//http://localhost:9595/algoticket/rol
router.route("/")
  .get(rol.findAll) // Recuperar todos los roles

module.exports = router;
