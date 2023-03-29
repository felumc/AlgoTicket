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