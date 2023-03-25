const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// realizar parse de content-type - application/json de requests
app.use(bodyParser.json());
// realizar parse de content-type - application/x-www-form-urlencoded de requests
app.use(bodyParser.urlencoded({ extended: true }));
//habilitar el cors
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
// route raiz
app.get("/", (req, res) => {
  res.json({
    message:
      "Bienvenido a la aplicacion AlgoTicket.",
  });
});

const db = require("./models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("Eliminar y sincronizar db");
});

require("./routes/index.routes")(app);

// asignar port para escuchar requests
const PORT = process.env.PORT || 9595;
app.listen(PORT, () => {
  console.log(`Server esta ejecutandose en puerto ${PORT}.`);
});
