import { insertProducto, getProductos, getProductoById, updateProducto, deleteProducto } from "../services/product.services.js";


const getProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await getProductoById(id);
    const data = producto ? producto : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_PRODUCTO");
  }
};

const getProductos = async (req, res) => {
  try {
    const productos = await getProductos();
    res.send(productos);
  } catch (error) {
    handleHttp(res, "ERROR_GET_PRODUCTOS");
  }
};

const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const updatedProducto = await updateProducto(id, newData);
    res.send(updatedProducto);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_PRODUCTO");
  }
};

const insertProducto = async (req, res) => {
  try {
    const productoData = req.body;
    const newProducto = await insertProducto(productoData);
    res.send(newProducto);
  } catch (error) {
    handleHttp(res, "ERROR_INSERT_PRODUCTO");
  }
};

const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProducto = await deleteProducto(id);
    res.send(deletedProducto);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_PRODUCTO");
  }
};

export { getProducto, getProductos, updateProducto, insertProducto, deleteProducto };

