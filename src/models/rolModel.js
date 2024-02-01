import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Rol = sequelize.define(
  "rol",
  {
    ID_ROL: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false,
      unique: true,
    },
    NOMBRE_ROL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Rol;
