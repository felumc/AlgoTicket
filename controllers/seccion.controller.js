const db = require("../models");
const Seccion = db.seccion;

// Crear y Guardar un nuevo Seccion
exports.create = (req, res) => {
  // Validar request
  if (!req.body.tipo_boleto) {
    res.status(400).send({
      mensaje: "El tipo_boleto no pueda estar vacío ",
    });
    return;
  }

  // Crear un Seccion
  const seccion = {
    tipo_boleto: req.body.tipo_boleto,
    precio: req.body.precio,
    rango_asientos: req.body.rango_asientos,
    eventoId: req.body.eventoId,
  };

  // Guardar Seccion en la base de datos
  Seccion.create(seccion)
    .then((seccion) => {
      res.status(200).send(seccion);
    })
    .catch((err) => {
      res
        .status(500)
        .send("Error al guardar en la base de datos");
    });
};

// Crear y Guardar muchas Secciones
exports.bulkCreate = (req, res) => {
  // Crear un Seccion
  const seccion = req.body;

  // Guardar Usuario en la base de datos
  Seccion.bulkCreate(seccion)
    .then((seccion) => {
      res.status(200).send(seccion);
    })
    .catch((err) => {
      res
        .status(500)
        .send("Error al guardar en la base de datos");
    });
};

// Recuperar todas las secciones de la base de datos
exports.findAll = (req, res) => {
  Seccion.findAll({
    include: [
      {
        model: db.evento,
        as: "evento",
      },
    ],
  })
    .then((seccion) => {
      res.status(200).send(seccion);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje:
          err.message || "Ocurrio un error al recuperar todas las secciones.",
      });
    });
};

// Encontrar Secciones por id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Seccion.findByPk(id, {
    include: [
      {
        model: db.evento,
        as: "evento",
      },
    ],
  })
    .then((seccion) => {
      res.status(200).send(seccion);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje: "Error al recuperar Seccion por id=" + id,
      });
    });
};

// Encontrar por tipo_boleto
exports.findByTipo = (req, res) => {
  const tipo = req.params.tipo_boleto;
  Seccion.findAll({
    where: { tipo_boleto: tipo },
    include: [
      {
        model: db.evento,
        as: "evento",
      },
    ],
  })
    .then((seccion) => {
      res.status(200).send(seccion);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje: "Error al recuperar Seccion por tipo= " + tipo,
      });
    });
};

// Actualizar Seccion por id
exports.update = (req, res) => {
  const id = req.params.id;
  Seccion.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Seccion se actualizo con exito.",
        });
      } else {
        res.status(500).send({ mensaje: `Error` });
      }
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `Error` });
    });
};

// Eliminar un Seccion por id
exports.delete = (req, res) => {
  const id = req.params.id;
  Seccion.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Seccion eliminada con exito!",
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
  Seccion.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ mensaje: `${nums} secciones fueron eliminados con exito!` });
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `No se pudieron eliminar las secciones` });
    });
};