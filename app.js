import express from "express";
import jsonParserMiddleware from "./src/middlewares/jsonParserMiddleware.js";
import authRoutes from "./src/routes/authRoutes.js";
import productRotues from "./src/routes/productRoutes.js";
import sequelize from "./src/config/sequelize.js";
import User from "./src/models/userModel.js";
import Producto from "./src/models/productModel.js"

const app = express();

app.use(jsonParserMiddleware);

app.use(authRoutes);
app.use(productRotues)

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Base de datos y modelos sincronizados");
  })
  .catch((error) => {
    console.error("Error sincronizando modelos:", error);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port => ${port}`);
});
