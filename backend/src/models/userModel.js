import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

export default User;