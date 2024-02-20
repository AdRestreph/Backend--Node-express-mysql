import { insertProducto as insertProduct, getProductos as getProducts, getProductoById, updateProducto as updateProduct, deleteProducto as deleteProduct } from "../services/product.services.js";

const getProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await getProductoById(id);
    const data = producto ? producto : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_PRODUCT");
  }
};

const getProductos = async (req, res) => {
  try {
    const productos = await getProducts();
    res.send(productos);
  } catch (error) {
    handleHttp(res, "ERROR_GET_PRODUCTS");
  }
};

const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const updatedProducto = await updateProduct(id, newData);
    res.send(updatedProducto);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_PRODUCT");
  }
};

const insertProducto = async (req, res) => {
  try {
    const productoData = req.body;
    const newProducto = await insertProduct(productoData);
    res.send(newProducto);
  } catch (error) {
    handleHttp(res, "ERROR_INSERT_PRODUCT");
  }
};

const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProducto = await deleteProduct(id);
    res.send(deletedProducto);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_PRODUCT");
  }
};

export { getProducto, getProductos, updateProducto, insertProducto, deleteProducto };
