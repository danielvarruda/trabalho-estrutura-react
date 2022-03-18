import { DataTypes, Model } from "sequelize";
import { sequelize } from "../instances/sql";

interface UserInstance extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
}

const User = sequelize.define<UserInstance>(
    "User",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

export default User;