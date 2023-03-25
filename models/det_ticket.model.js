module.exports = (sequelize, Sequelize) => {
    const Det_ticket = sequelize.define("det_ticket", {
        id_usuario: {
            type: Sequelize.INTEGER
        },
        id_boleto: {
            type: Sequelize.INTEGER
        },
        cantidad_boletos: {
            type: Sequelize.INTEGER
        }
    });

    return Det_ticket;
};