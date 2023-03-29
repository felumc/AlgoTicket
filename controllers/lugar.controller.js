const db = require("../models");
const Lugar = db.lugar;

// Crear y Guardar un nuevo Lugar
exports.create = (req, res) => {
  // Validar request
  if (!req.body.entidad_federativa) {
    res.status(400).send({
      mensaje: "entidad_federativa no pueda estar vacío ",
    });
    return;
  }

  // Crear un Lugar
  const lugar = {
    entidad_federativa: req.body.entidad_federativa,
    ciudad: req.body.ciudad,
    inmueble: req.body.inmueble
  };

  // Guardar Lugar en la base de datos
  Lugar.create(lugar)
    .then((lugar) => {
      res.status(200).send(lugar);
    })
    .catch((err) => {
      res
        .status(500)
        .send("Error al guardar en la base de datos");
    });
};

// Crear y Guardar muchas Lugares
exports.bulkCreate = (req, res) => {
  // Crear un Lugar
  const lugar = req.body;

  // Guardar Lugar en la base de datos
  Lugar.bulkCreate(lugar)
    .then((lugar) => {
      res.status(200).send(lugar);
    })
    .catch((err) => {
      res
        .status(500)
        .send("Error al guardar en la base de datos");
    });
};

// Recuperar todas los lugares de la base de datos
exports.findAll = (req, res) => {
  Lugar.findAll()
    .then((lugar) => {
      res.status(200).send(lugar);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje:
          err.message || "Ocurrio un error al recuperar todos los lugares.",
      });
    });
};

// Encontrar Lugares por id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Lugar.findByPk(id)
    .then((lugar) => {
      res.status(200).send(lugar);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje: "Error al recuperar Lugar por id=" + id,
      });
    });
};


// Actualizar Lugar por id
exports.update = (req, res) => {
  const id = req.params.id;
  Lugar.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Lugar se actualizo con exito.",
        });
      } else {
        res.status(500).send({ mensaje: `Error` });
      }
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `Error` });
    });
};

// Eliminar un Lugar por id
exports.delete = (req, res) => {
  const id = req.params.id;
  Lugar.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Lugar eliminado con exito!",
        });
      } else {
        res.status(500).send({ mensaje: `Error` });
      }
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `Error` });
    });
};

// Eliminar todos las Secciones de la base de datos
exports.deleteAll = (req, res) => {
  Lugar.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ mensaje: `${nums} lugares fueron eliminados con exito!` });
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `No se pudieron eliminar los lugares` });
    });
};