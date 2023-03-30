const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// Middlewares
app.use(bodyParser.json()); // parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, XRequested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Bienvenida a la API
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de AlgoTicket");
});

// Sequelize
const db = require("./models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("====================================\n"); 
  console.log("Host de servidor:", db.sequelize.config.host); 
  console.log(`Server esta ejecutandose en puerto ${PORT}.`);
});

// Rutas
//require("./routes/index.routes")(app);
app.use('/algoticket/rol', require('./routes/rol.routes'));
app.use('/algoticket/usuario', require('./routes/usuario.routes'));
app.use('/algoticket/seccion', require('./routes/seccion.routes'));
app.use('/algoticket/evento', require('./routes/evento.routes'));
app.use('/algoticket/lugar', require('./routes/lugar.routes'));
app.use('/algoticket/asiento', require('./routes/asiento.routes'));
app.use('/algoticket/boleto', require('./routes/boleto.routes'));

// Puerto de la API (localhost:9595) 
const PORT = process.env.PORT || 9595;
app.listen(PORT);
