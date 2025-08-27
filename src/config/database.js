import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    },
);

export default sequelize;

export const initDB = async () => {
    try {
        await sequelize.authenticate(); // Espera la conexión
        console.log("Conectado a la base de datos");
        await sequelize.sync(); // Espera que se sincronicen las tablas
    } catch(error) {
        console.error("Error al conectarse a la base de datos", error);
    }
};



