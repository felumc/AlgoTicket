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


    app.use('/algoticket', router);
}