import express from "express";
import { getProducto, getProductos, updateProducto, insertProducto, deleteProducto } from "../controller/productController.js";

const router = express.Router();


router.get("/productos", getProductos);
router.post("/productos", insertProducto);

router.get("/productos/:id", getProducto);
router.put("/productos/:id", updateProducto);
router.delete("/productos/:id", deleteProducto);

export default router;
