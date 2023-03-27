const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;
var path = require("path");
const bcrypt = require("bcrypt");

// Crear y Guardar un nuevo Usuario
exports.create = (req, res) => {
  // Validar request
  if (!req.body.nombre) {
    res.status(400).send({
      mensaje: "El título no pueda estar vacío ",
    });
    return;
  }

  const passwordHash = bcrypt.hashSync(req.body.password, 10);

  // Crear un Usuario
  const usuario = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    correo: req.body.correo,
    password: passwordHash,
    rolId: req.body.rolId,
  };

  // Guardar Usuario en la base de datos
  Usuario.create(usuario)
    .then((usuario) => {
      res.status(200).send(usuario);
    })
    .catch((err) => {
      res
        .status(500)
        .sendFile(path.join(__dirname, "../source/img", "error.png"));
    });
};

// Crear y Guardar muchas Usuario
exports.bulkCreate = (req, res) => {
  // Crear un Usuario
  const usuario = req.body;

  // Guardar Usuario en la base de datos
  Usuario.bulkCreate(usuario)
    .then((usuario) => {
      res.status(200).send(usuario);
    })
    .catch((err) => {
      res
        .status(500)
        .sendFile(path.join(__dirname, "../source/img", "error.png"));
    });
};

// Recuperar todos los usuarios de la base de datos
exports.findAll = (req, res) => {
  Usuario.findAll({
    include: [
      {
        model: db.rol,
        as: "rol",
      },
    ],
  })
    .then((usuario) => {
      res.status(200).send(usuario);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje:
          err.message || "Ocurrio un error al recuperar todos los usuarios.",
      });
    });
};

// Encontrar Usuario por id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Usuario.findByPk(id, {
    include: [
      {
        model: db.rol,
        as: "rol",
      },
    ],
  })
    .then((usuario) => {
      res.status(200).send(usuario);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje: "Error al recuperar Usuario por id=" + id,
      });
    });
};

// Encontrar por correo electronico
exports.findByEmail = (req, res) => {
  const correo = req.params.correo;
  Usuario.findAll({
    where: { correo: correo },
    include: [
      {
        model: db.rol,
        as: "rol",
      },
    ],
  })
    .then((usuario) => {
      res.status(200).send(usuario);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje: "Error al recuperar Usuario por correo= " + correo,
      });
    });
};

// Actualizar Usuario por id
exports.update = (req, res) => {
  const id = req.params.id;
  Usuario.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Usuario se actualizo con exito.",
        });
      } else {
        res.status(500).send({ mensaje: `Error` });
      }
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `Error` });
    });
};

// Eliminar un Usuario por id
exports.delete = (req, res) => {
  const id = req.params.id;
  Usuario.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Usuario eliminado con exito!",
        });
      } else {
        res.status(500).send({ mensaje: `Error` });
      }
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `Error` });
    });
};

// Eliminar todos los Usuario de la base de datos
exports.deleteAll = (req, res) => {
  Usuario.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ mensaje: `${nums} usuarios fueron eliminados con exito!` });
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `No se pudieron eliminar los usuarios` });
    });
};
