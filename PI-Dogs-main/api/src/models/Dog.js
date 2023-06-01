const { DataTypes } = require("sequelize");
const Temperaments = require("./Temperaments");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dog",
    {
      id: {
        type: DataTypes.INTEGER,

        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        reference: {
          model: Temperaments,
          key: "name",
        },
      },
      altura: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peso: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      anios: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
