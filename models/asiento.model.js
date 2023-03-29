module.exports = (sequelize, Sequelize) => {
    const Asiento = sequelize.define("asiento", {
        fila: {
            type: Sequelize.STRING
        },
        numero_asiento: {
            type: Sequelize.INTEGER
        }
    });

    return Asiento;
};