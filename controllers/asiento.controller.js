const db = require("../models");
const Asiento = db.asiento;

// Crear y Guardar un nuevo Asiento
exports.create = (req, res) => {
  // Validar request
  if (!req.body.tipo_boleto) {
    res.status(400).send({
      mensaje: "El tipo_boleto no pueda estar vacío ",
    });
    return;
  }

  // Crear un Asiento
  const asiento = {
    fila : req.body.fila,
    numero_asiento : req.body.numero_asiento,
  };

  // Guardar Asiento en la base de datos
  Asiento.create(asiento)
    .then((asiento) => {
      res.status(200).send(asiento);
    })
    .catch((err) => {
      res
        .status(500)
        .send("Error al guardar en la base de datos");
    });
};

// Crear y Guardar muchos asientos
exports.bulkCreate = (req, res) => {
  // Crear un Asiento
  const asiento = req.body;
  // Guardar Usuario en la base de datos
  Asiento.bulkCreate(asiento)
    .then((asiento) => {
      res.status(200).send(asiento);
    })
    .catch((err) => {
      res
        .status(500)
        .send("Error al guardar en la base de datos");
    });
};

// Recuperar todas las asientos de la base de datos
exports.findAll = (req, res) => {
    Asiento.findAll({
      include: [
        {
          model: db.evento,
          as: "evento",
        },
      ],
    })
      .then((asiento) => {
        res.status(200).send(asiento);
      })
      .catch((err) => {
        res.status(500).send({
          mensaje:
            err.message || "Ocurrio un error al recuperar todas las asientos.",
        });
    });
};

// Encontrar asientos por id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Asiento.findByPk(id, {
    include: [
      {
        model: db.evento,
        as: "evento",
      },
    ],
  })
    .then((asiento) => {
      res.status(200).send(asiento);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje: "Error al recuperar Asiento por id=" + id,
      });
    });
};

// Encontrar por fila
exports.findByTipo = (req, res) => {
  const fila = req.params.fila;
  Asiento.findAll({
    where: { fila: fila },
    include: [
      {
        model: db.evento,
        as: "evento",
      },
    ],
  })
    .then((asiento) => {
      res.status(200).send(asiento);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje: "Error al recuperar Asiento por tipo= " + tipo,
      });
    });
};

// Actualizar Asiento por id
exports.update = (req, res) => {
  const id = req.params.id;
  Asiento.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Asiento se actualizo con exito.",
        });
      } else {
        res.status(500).send({ mensaje: `Error` });
      }
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `Error` });
    });
};

// Eliminar un Asiento por id
exports.delete = (req, res) => {
  const id = req.params.id;
  Asiento.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Asiento eliminada con exito!",
        });
      } else {
        res.status(500).send({ mensaje: `Error` });
      }
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `Error` });
    });
};

// Eliminar todos los asientos de la base de datos
exports.deleteAll = (req, res) => {
  Asiento.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res
        .status(200)
        .send({ mensaje: `${nums} asientos fueron eliminados con exito!` });
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `No se pudieron eliminar los asientos` });
    });
};