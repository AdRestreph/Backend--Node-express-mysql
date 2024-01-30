// app.js
import express from "express";
import jsonParserMiddleware from "./src/middlewares/jsonParserMiddleware.js";
import authRoutes from "./src/routes/authRoutes.js";
import sequelize from "./src/config/sequelize.js"; // Ruta correcta a tu archivo de configuración Sequelize
import User from "./src/models/userModel.js"; // Ruta correcta a tu modelo de usuario

const app = express();

// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(jsonParserMiddleware);

// Rutas
app.use(authRoutes);

// Sincronizar modelos con la base de datos
sequelize
  .sync({ force: false }) // Cambia a `true` para recrear tablas en cada reinicio (¡ten cuidado en producción!)
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
