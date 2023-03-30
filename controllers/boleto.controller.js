const db = require("../models");
const Boleto = db.boleto;
const Evento = db.evento;
const Seccion = db.seccion;
const { Op } = require("sequelize");



// Crear y Guardar un nuevo Boleto
exports.create = (req, res) => {
  // Validar request
  if (
    !req.body.seccionId ||
    !req.body.asientoId ||
    !req.body.usuarioId ||
    !req.body.estatus
  ) {
    res.status(400).send({
      mensaje: "Faltan datos",
    });
    return;
  }

  // Crear un Boleto
  const boleto = {
    seccionId: req.body.seccionId,
    asientoId: req.body.asientoId,
    usuarioId: req.body.usuarioId,
    estatus: req.body.estatus,
  };


  // Guardar Boleto en la base de datos
  Boleto.create(boleto)
    .then((boleto) => {
      res.status(200).send(boleto);
    })
    .catch((err) => {
      resres.status(200).send({
        mensaje: err.message || "Ocurrio un error al crear un boleto.",
      });
    });
};

/*Modelo de seccion
module.exports = (sequelize, Sequelize) => {
    const Seccion = sequelize.define("seccion", {
        tipo_boleto: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.FLOAT
        },
        rango_asientos: {
            type: Sequelize.ARRAY(Sequelize.INTEGER)
        },
        eventoId: {
            type: Sequelize.INTEGER
        }
    });

    return Seccion;
};
*/
/*Modelo de evento
module.exports = (sequelize, Sequelize) => {
    const Evento = sequelize.define("evento", {
        nombre_evento: {
            type: Sequelize.STRING
        },
        fecha: {
            type: Sequelize.DATEONLY
        },
        artista: {
            type: Sequelize.STRING
        },
        organizador: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        restricciones: {
            type: Sequelize.STRING
        },
        lugarId: {
            type: Sequelize.INTEGER
        }
    });

    return Evento;
};
*/
exports.findByEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const secciones = await Seccion.findAll({
      where: {
        eventoId: id,
      },
    });
    const seccionIds = secciones.map((seccion) => seccion.id);
    const boletos = await Boleto.findAll({
      where: {
        seccionId: {
          [Op.in]: seccionIds,
        },
      },
      include: [
        {
          model: Seccion,
          as: "seccion",
        },
      ],
    });
    res.status(200).send(boletos);
  } catch (err) {
    res.status(500).send({
      mensaje: err.message || "Ocurrio un error al recuperar boletos.",
    });
  }
};




// Crear y Guardar muchas Boleto
exports.bulkCreate = (req, res) => {
  // Crear un Boleto
  const boleto = req.body;

  // Guardar Boleto en la base de datos
  Boleto.bulkCreate(boleto)
    .then((boleto) => {
      res.status(200).send(boleto);
    })
    .catch((err) => {
      resres.status(200).send({
        mensaje: err.message || "Ocurrio un error al crear boletos.",
      });
    });
}

// Recuperar todos los boletos de la base de datos
exports.findAll = (req, res) => {
  Boleto.findAll()
    .then((boleto) => {
      res.status(200).send(boleto);
    })
    .catch((err) => {
      resres.status(200).send({
        mensaje: err.message || "Ocurrio un error al recuperar boletos.",
      });
    });
};

// Recuperar un solo boleto de la base de datos
exports.findOne = (req, res) => {
  const id = req.params.id;

  Boleto.findByPk(id)
    .then((boleto) => {
      res.status(200).send(boleto);
    })
    .catch((err) => {
      resres.status(200).send({
        mensaje: err.message || "Ocurrio un error al el recuperar boleto.",
      });
    });
}

// Actualizar un boleto por id
exports.update = (req, res) => {
  const id = req.params.id;
  Boleto.update(req.body, {
    where : { id: id }
  })
    .then((boleto) => {
      res.status(200).send(boleto);
    })
    .catch((err) => {
      resres.status(200).send({
        mensaje: err.message || "Ocurrio un error al actualizar el boleto.",
      });
    });
};

// Eliminar un boleto por id
exports.delete = (req, res) => {
  const id = req.params.id;
  Boleto.destroy({
    where: { id: id }
  })
    .then((boleto) => {
      res.status(200).send(boleto);
    })
    .catch((err) => {
      resres.status(200).send({
        mensaje: err.message || "Ocurrio un error al eliminar el boleto.",
      });
    });
};

// Eliminar todos los boletos
exports.deleteAll = (req, res) => {
  Boleto.destroy({
    where: {},
    truncate: false
  })
    .then((boleto) => {
      res.status(200).send(boleto);
    })
    .catch((err) => {
      resres.status(200).send({
        mensaje: err.message || "Ocurrio un error al eliminar los boletos.",
      });
    });
}


