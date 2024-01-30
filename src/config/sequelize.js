import { Sequelize } from "sequelize";
import { development } from "./sequelize.config.js";

const sequelize = new Sequelize(development);

export default sequelize;
