var router = require("express").Router();

const usuario = require("../controllers/usuario.controller.js");

router
  .route("/") //http://localhost:9595/algoticket/usuario
  .get(usuario.findAll) // Recuperar todos las usuarios
  .post(usuario.create) // Crear una nueva usuario
  .delete(usuario.deleteAll); // Eliminar todos las usuarios de la base de datos

router
  .route("/:id") //http://localhost:9595/algoticket/usuario/[id]
  .get(usuario.findOne) // Encontrar usuario por id
  .put(usuario.update) // Acutalizar usuario por id
  .delete(usuario.delete); // Eliminar un usuario por id

// Crear muchos usuarios
router.post("/bulk",usuario.bulkCreate); //http://localhost:9595/algoticket/usuarios_bulk

// Encontrar usuario por correo
router.get("/correo/:correo", usuario.findByEmail); //http://localhost:9595/algoticket/usuario/correo/[correo]

module.exports = router;
