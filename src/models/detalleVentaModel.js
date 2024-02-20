import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Producto from "./productModel.js";
import Venta from "./ventaModel.js"

const DetalleVenta = sequelize.define(
  "detalleVenta",
  {
    ID_DETALLE_VENTA: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    ID_VENTA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Venta,
        key: "ID_VENTA",
      },
    },
    
    ID_PRODUCTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Producto,
        key: "ID_PRODUCTO",
      },
    },
    CANTIDAD: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ESTADO_ENVÍO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PRECIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {}
);

DetalleVenta.belongsTo(Producto, { foreignKey: "ID_PRODUCTO", as: "producto" });
DetalleVenta.belongsTo(Venta, { foreignKey: "ID_VENTA", as: "venta"});

export default DetalleVenta;
