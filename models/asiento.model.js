module.exports = (sequelize, Sequelize) => {
    const Asiento = sequelize.define("asiento", {
        numero_asiento: {
            type: Sequelize.INTEGER
        }
    });

    return Asiento;
};