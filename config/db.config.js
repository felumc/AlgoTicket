module.exports = {
    HOST: "algoticket-server.postgres.database.azure.com",
    USER: "postgresadmin@algoticket-server",
    PASSWORD: "H^8jyW3@2r6EUf",
    DB: "db_algoticket",
    dialect: "postgres",
    port: 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000, //tiempo máximo, en milisegundos, que el grupo intentará conectarse antes de lanzar el error
      idle: 10000, //tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
    }
  };