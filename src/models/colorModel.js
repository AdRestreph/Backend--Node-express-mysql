import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Color = sequelize.define(
  "color",
  {
    ID_COLOR: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    NOMBRE_COLOR: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CODIGO_COLOR: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

export default Color;
