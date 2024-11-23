import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const connection = new Sequelize(
    process.env.DATABASE || "mysql", process.env.USERDB || "root", process.env.PASSWORDDB || "secret", {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export const verificarConexion = async () => {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}