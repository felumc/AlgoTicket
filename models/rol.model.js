module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define("rol", {
        tipo: {
            type: Sequelize.STRING
        }
    });

    return Rol;
};