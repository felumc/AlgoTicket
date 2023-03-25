module.exports = (sequelize, Sequelize) => {
    const Boleto = sequelize.define("boleto", {
        id_evento: {
            type: Sequelize.INTEGER
        },
        tipo_boleto: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.FLOAT
        }
    });

    return Boleto;
};