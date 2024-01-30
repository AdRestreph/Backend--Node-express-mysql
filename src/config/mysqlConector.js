import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const requiredEnvVariables = [
  "DB_HOST",
  "DB_USER",
  "DB_PASSWORD",
  "DB_DATABASE",
  "DB_PORT",
];

for (const variable of requiredEnvVariables) {
  if (!process.env[variable]) {
    console.error(`Error: ${variable} not found in .env file`);
    process.exit(1);
  }
}

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

const pool = mysql.createPool(config);

try {
  const connection = await pool.getConnection();
  console.log("Connected to MySQL database");
  connection.release();
} catch (error) {
  console.error("Error connecting to database:", error);
}

export default pool;
