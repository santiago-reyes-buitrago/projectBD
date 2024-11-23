import {DataTypes} from "sequelize";
import {connection} from "../database/db";

export const Municipio = connection.define('MUNICIPIO',{
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
        tableName: 'MUNICIPIO',
        timestamps: false,
    },
);