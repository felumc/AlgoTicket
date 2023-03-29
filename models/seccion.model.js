module.exports = (sequelize, Sequelize) => {
    const Seccion = sequelize.define("seccion", {
        tipo_boleto: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.FLOAT
        },
        rango_asientos: {
            type: Sequelize.ARRAY(Sequelize.INTEGER)
        },
        id_evento: {
            type: Sequelize.INTEGER
        }
    });

    return Seccion;
};