import {DataTypes} from "sequelize";
import {connection} from "../database/db";

export const CENSO = connection.define('CENSO',{
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        poblacion_total:{
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        quantity_men:{
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        quantity_women:{
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        promedio_edad:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        temperatura_media:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        promedio_ingreso: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
        id_municip:{
           type: DataTypes.BIGINT,
           allowNull: false,
        },
        id_departamento:{
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    },
    {
        tableName: 'CENSO',
        timestamps: false
    },
);