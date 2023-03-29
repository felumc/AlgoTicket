const db = require("../models");
const Evento = db.evento;

// Crear y Guardar un nuevo Evento
exports.create = (req, res) => {
  // Validar request
  if (!req.body.nombre_evento) {
    res.status(400).send({
      mensaje: "El nombre_evento no pueda estar vacío ",
    });
    return;
  }

  // Crear un Evento
  const evento = {
    nombre_evento: req.body.nombre_evento,
    fecha: req.body.fecha,
    artista: req.body.artista,
    organizador: req.body.organizador,
    descripcion: req.body.descripcion,
    restricciones: req.body.restricciones,
    lugarId: req.body.lugarId,
  };

  // Guardar Evento en la base de datos
  Evento.create(evento)
    .then((evento) => {
      res.status(200).send(evento);
    })
    .catch((err) => {
      res
        .status(500)
        .send("Error al guardar en la base de datos");
    });
};

// Crear y Guardar muchas Eventos
exports.bulkCreate = (req, res) => {
  // Crear un Evento
  const evento = req.body;

  // Guardar Usuario en la base de datos
  Evento.bulkCreate(evento)
    .then((evento) => {
      res.status(200).send(evento);
    })
    .catch((err) => {
      res
        .status(500)
        .send("Error al guardar en la base de datos");
    });
};

// Recuperar todas las secciones de la base de datos
exports.findAll = (req, res) => {
  Evento.findAll({
      })
    .then((evento) => {
      res.status(200).send(evento);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje:
          err.message || "Ocurrio un error al recuperar todas las secciones.",
      });
    });
};

// Encontrar Eventos por id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Evento.findByPk(id, {
    
  })
    .then((evento) => {
      res.status(200).send(evento);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje: "Error al recuperar Evento por id=" + id,
      });
    });
};

// Encontrar por nombre_evento
exports.findByTipo = (req, res) => {
  const tipo = req.params.nombre_evento;
  Evento.findAll({
    where: { nombre_evento: tipo },
    include: [
      {
        model: db.evento,
        as: "evento",
      },
    ],
  })
    .then((evento) => {
      res.status(200).send(evento);
    })
    .catch((err) => {
      res.status(500).send({
        mensaje: "Error al recuperar Evento por tipo= " + tipo,
      });
    });
};

// Actualizar Evento por id
exports.update = (req, res) => {
  const id = req.params.id;
  Evento.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Evento se actualizo con exito.",
        });
      } else {
        res.status(500).send({ mensaje: `Error` });
      }
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `Error` });
    });
};

// Eliminar un Evento por id
exports.delete = (req, res) => {
  const id = req.params.id;
  Evento.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          mensaje: "Evento eliminada con exito!",
        });
      } else {
        res.status(500).send({ mensaje: `Error` });
      }
    })
    .catch((err) => {
      res.status(500).send({ mensaje: `Error` });
    });
};

// Eliminar todos las Eventos de la base de datos
exports.deleteAll = (req, res) => {
  Evento.destroy({
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