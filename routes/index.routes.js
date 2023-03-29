module.exports = app => {
    
    const express = require("express");
    var router = require("express").Router();

    /*
    * Rutas para rol
    */
    const rol = require("../controllers/rol.controller.js");
    // Crear un nuevo usuario 
    router.post("/rol/crear", rol.create); //http://localhost:9595/algoticket/crear
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


    
    app.use('/algoticket', router);
}