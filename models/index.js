const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

//local
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },

    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }  
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;

db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.evento = require("./evento.model.js")(sequelize, Sequelize);
db.asiento = require("./asiento.model.js")(sequelize, Sequelize);
db.rol = require("./rol.model.js")(sequelize, Sequelize);
db.boleto = require("./boleto.model.js")(sequelize, Sequelize);
db.seccion = require("./seccion.model.js")(sequelize, Sequelize);
db.lugar = require("./lugar.model.js")(sequelize, Sequelize);

// establecer las relaciones
// -------------- Tabla rol
db.rol.hasMany(db.usuario, {
    foreingKey: "rolID",
});

db.usuario.belongsTo(db.rol, {
    foreingKey: "rolID",
})

// -------------- Tabla usuario
db.usuario.hasMany(db.boleto, {
    foreingKey: "usuarioId",
});

db.boleto.belongsTo(db.usuario, {
    foreingKey: "usuarioId",
})

// -------------- Tabla Lugar
db.lugar.hasMany(db.evento, {
    foreingKey: "lugarId",
});

db.evento.belongsTo(db.lugar, {
    foreingKey: "lugarId",
});

// -------------- Tabla Evento
db.evento.hasMany(db.seccion, {
    foreingKey: "eventoId",
});

db.seccion.belongsTo(db.evento, {
    foreingKey: "eventoId",
});

// -------------- Tabla Seccion
db.seccion.hasMany(db.boleto, {
    foreingKey: "seccionId",
});

db.boleto.belongsTo(db.seccion, {
    foreingKey: "seccionId",
});

// -------------- Tabla Asiento
db.asiento.hasMany(db.boleto, {
    foreingKey: "asientoId",
});

db.boleto.belongsTo(db.asiento, {
    foreingKey: "asientoId",
});
