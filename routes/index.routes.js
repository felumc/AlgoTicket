module.exports = app => {
    
    const express = require("express");
    var router = require("express").Router();

    /*
    * Rutas para rol
    */
    const rol = require("../controllers/rol.controller.js");
    // Crear un nuevo usuario 
    router.post("/rol/crear", rol.create); //http://localhost:9595/usuario/crear
    /* router.get("/usuarios", usuario.findAll); //http://localhost:9595/usuarios
    router.get("/usuario/:id", usuario.findOne); //http://localhost:9595/usuario/:id
    router.get("/todo/:id", usuario.todo); //http://localhost:9595/todo/:id
    router.put("/usuario/:id", usuario.update); //http://localhost:9595/usuario/:id
    router.delete("/usuario/:id", usuario.delete); //http://localhost:9595/usuario/:id */

    /*
    * Rutas para usuario
    */
    const usuario = require("../controllers/usuario.controller.js");

    // Crear una nueva usuario 
    router.post("/usuario", usuario.create); //http://localhost:9595/algoticket/usuario

    // Crear muchos usuarios
    router.post("/usuarios_bulk", usuario.bulkCreate); //http://localhost:9595/algoticket/usuarios_bulk

    // Recuperar todos las usuarios
    router.get("/usuarios", usuario.findAll); //http://localhost:9595/algoticket/usuarios/

    // Encontrar usuario por id
    router.get("/usuario/:id", usuario.findOne); //http://localhost:9595/algoticket/usuario/[id]

    // Encontrar usuario por correo
    router.get("/usuario_c/:correo", usuario.findByEmail); //http://localhost:9595/algoticket/usuario/[correo]

    // Actualizar usuario por id
    router.put("/usuario/:id", usuario.update); //http://localhost:9595/algoticket/usuario/[id]

    // Eliminar un usuario por id
    router.delete("/usuario/:id", usuario.delete); //http://localhost:9595/algoticket/usuario/[id]

    // Eliminar todos las usuarios de la base de datos
    router.delete("/usuariosALL", usuario.deleteAll); //http://localhost:9595/algoticket/usuariosALL/

    //Recuperar todo
    router.get('/usuariost', usuario.findAll);//http://localhost:9595/algoticket/usuariost/


    /*
    * Rutas para seccion
    */
    const seccion = require("../controllers/seccion.controller.js");

    // Crear una nueva seccion 
    router.post("/seccion", seccion.create); //http://localhost:9595/algoticket/seccion

    // Crear muchos secciones
    router.post("/secciones_bulk", seccion.bulkCreate); //http://localhost:9595/algoticket/secciones_bulk

    // Recuperar todos las secciones
    router.get("/secciones", seccion.findAll); //http://localhost:9595/algoticket/secciones/

    // Encontrar seccion por id
    router.get("/seccion/:id", seccion.findOne); //http://localhost:9595/algoticket/seccion/[id]

    // Encontrar seccion por tipo
    //router.get("/seccion_t/:tipo", seccion.findByTipo); //http://localhost:9595/algoticket/seccion_t/[tipo]

    // Actualizar seccion por id
    router.put("/seccion/:id", seccion.update); //http://localhost:9595/algoticket/seccion/[id]

    // Eliminar un seccion por id
    router.delete("/seccion/:id", seccion.delete); //http://localhost:9595/algoticket/seccion/[id]

    // Eliminar todos las secciones de la base de datos
    router.delete("/seccionesALL", seccion.deleteAll); //http://localhost:9595/algoticket/seccionesALL/


    /*
    * Rutas para Evento
    */
    const evento = require("../controllers/evento.controller.js");

    // Crear una nueva evento 
    router.post("/evento", evento.create); //http://localhost:9595/algoticket/evento

    // Crear muchos evento
    router.post("/evento_bulk", evento.bulkCreate); //http://localhost:9595/algoticket/eventos_bulk

    // Recuperar todos las usuarios
    router.get("/eventos", evento.findAll); //http://localhost:9595/algoticket/eventos/

    // Encontrar evento por id
    router.get("/evento/:id", evento.findOne); //http://localhost:9595/algoticket/evento/[id]

    // Actualizar evento por id
    router.put("/evento/:id", evento.update); //http://localhost:9595/algoticket/evento/[id]

    // Eliminar un evento por id
    router.delete("/evento/:id", evento.delete); //http://localhost:9595/algoticket/evento/[id]

    // Eliminar todos las eventos de la base de datos
    router.delete("/eventoALL", evento.deleteAll); //http://localhost:9595/algoticket/eventoALL/

    
    /*
    * Rutas para Asiento
    */

    const asiento = require("../controllers/asiento.controller.js");

    // Crear un nuevo asiento
    router.post("/asiento", asiento.create); //http://localhost:9595/algoticket/asiento

    // Crear muchos asientos
    router.post("/asientos_bulk", asiento.bulkCreate); //http://localhost:9595/algoticket/asientos_bulk
    
    // Recuperar todos los asientos
    router.get("/asientos", asiento.findAll); //http://localhost:9595/algoticket/asientos/

    // Encontrar asiento por id
    router.get("/asiento/:id", asiento.findOne); //http://localhost:9595/algoticket/asiento/[id]

    // Actualizar asiento por id
    router.put("/asiento/:id", asiento.update); //http://localhost:9595/algoticket/asiento/[id]

    // Encontrar asiento por fila
    router.get("/asiento_f/:fila", asiento.findByTipo); //http://localhost:9595/algoticket/asiento_f/[fila]

    // Eliminar un asiento por id
    router.delete("/asiento/:id", asiento.delete); //http://localhost:9595/algoticket/asiento/[id]

    // Eliminar todos los asientos de la base de datos
    router.delete("/asientosALL", asiento.deleteAll); //http://localhost:9595/algoticket/asientosALL/

     /*
    * Rutas para lugar
    */
    const lugar = require("../controllers/lugar.controller.js");

    // Crear una nueva lugar 
    router.post("/lugar", lugar.create); //http://localhost:9595/algoticket/lugar

    // Crear muchos lugares
    router.post("/lugares_bulk", lugar.bulkCreate); //http://localhost:9595/algoticket/lugares_bulk

    // Recuperar todos las lugares
    router.get("/lugares", lugar.findAll); //http://localhost:9595/algoticket/lugares/

    // Encontrar lugar por id
    router.get("/lugar/:id", lugar.findOne); //http://localhost:9595/algoticket/lugar/[id]

    // Actualizar lugar por id
    router.put("/lugar/:id", lugar.update); //http://localhost:9595/algoticket/lugar/[id]

    // Eliminar un lugar por id
    router.delete("/lugar/:id", lugar.delete); //http://localhost:9595/algoticket/lugar/[id]

    // Eliminar todos las lugares de la base de datos
    router.delete("/lugaresALL", lugar.deleteAll); //http://localhost:9595/algoticket/lugaresALL/

    app.use('/algoticket', router);

    /*
    * Rutas para boleto
    */
    const boleto = require("../controllers/boleto.controller.js");

    // Crear una nueva boleto 
    router.post("/boleto", boleto.create); //http://localhost:9595/algoticket/boleto

    // Crear muchos boletoes
    router.post("/boletoes_bulk", boleto.bulkCreate); //http://localhost:9595/algoticket/boletoes_bulk

    // Recuperar todos las boletoes
    router.get("/boletoes", boleto.findAll); //http://localhost:9595/algoticket/boletoes/

    // Encontrar boleto por id
    router.get("/boleto/:id", boleto.findOne); //http://localhost:9595/algoticket/boleto/[id]

    // Encontrar boletos por evento
    router.get("/boleto_e/:id", boleto.findByEvent); //http://localhost:9595/algoticket/boleto_e/[id]

    // Encontrar boletos por usuario
    router.get("/boleto_u/:id", boleto.findBoletosUsuario); //http://localhost:9595/algoticket/boleto_u/[id]

    // Actualizar boleto por id
    router.put("/boleto/:id", boleto.update); //http://localhost:9595/algoticket/boleto/[id]

    // Eliminar un boleto por id
    router.delete("/boleto/:id", boleto.delete); //http://localhost:9595/algoticket/boleto/[id]

    // Eliminar todos las boletoes de la base de datos
    router.delete("/boletoesALL", boleto.deleteAll); //http://localhost:9595/algoticket/boletoesALL/
}