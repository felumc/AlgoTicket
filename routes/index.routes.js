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

    /*Rutas para usuario*/
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

    app.use('/algoticket', router);
}