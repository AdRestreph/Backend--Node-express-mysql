import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Rol from "./rolModel.js";

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
    ID_ROL: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Rol,
        key: "ID_ROL",
      },
    },
  },
  {}
);

User.belongsTo(Rol, { foreignKey: "ID_ROL", as: "rol" });

export default User;

