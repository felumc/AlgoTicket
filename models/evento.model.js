module.exports = (sequelize, Sequelize) => {
    const Evento = sequelize.define("evento", {
        nombre_evento: {
            type: Sequelize.STRING
        },
        fecha: {
            type: Sequelize.DATEONLY
        },
        entidad_federativa: {
            type: Sequelize.STRING
        },
        ciudad: {
            type: Sequelize.STRING
        },
        cantidad_boletos: {
            type: Sequelize.INTEGER
        }
    });

    return Evento;
};