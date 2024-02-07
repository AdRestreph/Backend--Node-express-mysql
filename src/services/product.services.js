import Producto from "../models/productModel.js";

const insertProducto = async (productoData) => {
  try {
    const newProducto = await Producto.create(productoData);
    return newProducto;
  } catch (error) {
    throw new Error(`Error al insertar el producto: ${error.message}`);
  }
};

const getProductos = async () => {
  try {
    const productos = await Producto.findAll();
    return productos;
  } catch (error) {
    throw new Error(`Error al obtener los productos: ${error.message}`);
  }
};

const getProductoById = async (id) => {
  try {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      throw new Error("Producto no encontrado");
    }
    return producto;
  } catch (error) {
    throw new Error(`Error al obtener el producto: ${error.message}`);
  }
};

const updateProducto = async (id, newData) => {
  try {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      throw new Error("Producto no encontrado");
    }
    await producto.update(newData);
    return producto;
  } catch (error) {
    throw new Error(`Error al actualizar el producto: ${error.message}`);
  }
};

const deleteProducto = async (id) => {
  try {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      throw new Error("Producto no encontrado");
    }
    await producto.destroy();
    return producto;
  } catch (error) {
    throw new Error(`Error al eliminar el producto: ${error.message}`);
  }
};

export { insertProducto, getProductos, getProductoById, updateProducto, deleteProducto };
