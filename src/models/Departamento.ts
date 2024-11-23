import {DataTypes} from "sequelize";
import {connection} from "../database/db";

export const DEPARTAMENTO = connection.define('DEPARTAMENTO',{
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
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
    },
    {
        tableName: 'DEPARTAMENTO',
        timestamps: false,
    },
);