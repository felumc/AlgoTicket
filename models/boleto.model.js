module.exports = (sequelize, Sequelize) => {
    const Boleto = sequelize.define("boleto", {
        id_seccion: {
            type: Sequelize.INTEGER
        },
        id_asiento: {
            type: Sequelize.INTEGER
        },
        id_usuario: {
            type: Sequelize.INTEGER
        },
        estatus: {
            type: Sequelize.INTEGER
        }
    });

    return Boleto;
};