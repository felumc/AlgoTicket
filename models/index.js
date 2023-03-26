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
db.det_ticket = require("./det_ticket.model.js")(sequelize, Sequelize);
db.rol = require("./rol.model.js")(sequelize, Sequelize);
db.boleto = require("./boleto.model.js")(sequelize, Sequelize);

// establecer las relaciones
// -------------- Tabla rol
db.rol.hasMany(db.usuario, {
    foreingKey: "rolID",
});

db.usuario.belongsTo(db.rol, {
    foreingKey: "rolID",
})

// -------------- Tabla usuario
db.usuario.hasMany(db.det_ticket, {
    foreingKey: "id_usuario",
});

db.det_ticket.belongsTo(db.usuario, {
    foreingKey: "id_usuario",
})

// -------------- Tabla boleto
db.boleto.hasMany(db.det_ticket, {
    foreingKey: "id_boleto",
});

db.det_ticket.belongsTo(db.boleto, {
    foreingKey: "id_boleto",
});

