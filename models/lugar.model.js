module.exports = (sequelize, Sequelize) => {
    const Lugar = sequelize.define("lugar", {
        entidad_federativa: {
            type: Sequelize.STRING
        },
        ciudad: {
            type: Sequelize.STRING
        },
        inmueble: {
            type: Sequelize.STRING
        }
    });

    return Lugar;
};