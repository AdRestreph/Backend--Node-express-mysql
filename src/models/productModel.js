import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Color from "./colorModel.js"
import Marca from "./marcaModel.js"
import Seccion from "./seccionModel.js"
import Talla from "./tallaModel.js"

const Producto = sequelize.define(
  "producto",
  {
    ID_PRODUCTO: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    IMAGEN: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NOMBRE_PRODUCTO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    STOCK: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PRECIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ID_SECCION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Seccion,
        key: 'ID_SECCION',
      },
    },
    ID_MARCA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Marca,
        key: 'ID_MARCA',
      },
    },
    ID_COLOR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Color,
        key: 'ID_COLOR',
      },
    },
    ID_TALLA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Talla,
        key: 'ID_TALLA',
      },
    },
  },
  {}
);

Producto.belongsTo(Seccion, { foreignKey: "ID_SECCION", as: "seccion" });
Producto.belongsTo(Marca, { foreignKey: "ID_MARCA", as: "marca" });
Producto.belongsTo(Color, { foreignKey: "ID_COLOR", as: "color" });
Producto.belongsTo(Talla, { foreignKey: "ID_TALLA", as: "talla" });

export default Producto;
