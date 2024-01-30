// user.model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const User = sequelize.define(
  "usuario",
  {
    ID_USUARIO: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    NOMBRE_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    APELLIDO_USUARIO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DOCUMENTO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CORREO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CONTRASEÑA: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ROL: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Opciones adicionales si es necesario
  }
);

export default User;
