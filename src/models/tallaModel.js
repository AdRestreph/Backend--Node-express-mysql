import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Talla = sequelize.define(
  "talla",
  {
    ID_TALLA: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    NOMBRE_TALLA: {
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

export default Talla;