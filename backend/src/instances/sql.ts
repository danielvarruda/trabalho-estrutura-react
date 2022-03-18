import {Sequelize} from "sequelize";

export const sequelize = new Sequelize(
    "ruetter",
    "root",
    "123456",
    {
        dialect: "mysql",
        port: 5432
    }
);
