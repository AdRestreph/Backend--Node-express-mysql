import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Seccion = sequelize.define(
  "seccion",
  {
    ID_SECCION: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    NOMBRE_SECCION: {
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

export default Seccion;
