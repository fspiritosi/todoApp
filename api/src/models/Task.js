import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Task = sequelize.define("task", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.ENUM('todo', 'doing', 'complete', 'aborted'),
        allowNull: false,
        defaultValue: 'todo'
    }
})