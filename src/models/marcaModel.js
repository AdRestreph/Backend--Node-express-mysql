import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Marca = sequelize.define(
  "marca",
  {
    ID_MARCA: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    NOMBRE_MARCA: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

export default Marca;
