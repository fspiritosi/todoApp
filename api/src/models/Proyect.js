import { DataTypes  } from "sequelize";
import { sequelize } from "../database/db.js";
import { Task } from "./Task.js";



export const Projects = sequelize.define('projects', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    priority:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    }
    // deliverydate:{
    //     type: DataTypes.DATEONLY,
    //     allowNull: false
    // }
}
)

//Relationships

Projects.hasMany(Task, {foreignKey: 'projectId', sourceKey: 'id'});
Task.belongsTo(Projects, {foreignKey: 'projectId', targetId: 'id'});