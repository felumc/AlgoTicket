const db = require("../models");

const Rol= db.rol;

//Funcion crear
exports.create = (req, res) => {
    // Validar request
    if (!req.body.tipo) {
      res.status(400).send({
        message:
          "El contenido no puede ser vacio, tipo=" +
          req.body.tipo,
      });
      return;
    }
    // Crear una Comentario
    const rol = {
      tipo: req.body.tipo,
    };
    // Guardar Comentario en la base de datos
    Rol.create(rol)
    .then(Rol => {
      res.status(200).send(Rol);
    })
    .catch(err => {
      res.status(500).send({mensaje: "Error al crear Rol"});
    });
};

//Funcion encontrar todos
exports.findAll = (req, res) => {
    Rol.findAll()
    .then(Rol => {
      res.status(200).send(Rol);
    })
    .catch(err => {
      res.status(500).send({mensaje: "Error al recuperar Rol"});
    });
}
