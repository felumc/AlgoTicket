module.exports = (sequelize, Sequelize) => {
    const Boleto = sequelize.define("boleto", {
        seccionId: {
            type: Sequelize.INTEGER
        },
        asientoId: {
            type: Sequelize.INTEGER
        },
        usuarioId: {
            type: Sequelize.INTEGER
        },
        estatus: {
            type: Sequelize.INTEGER
        }
    });

    return Boleto;
};