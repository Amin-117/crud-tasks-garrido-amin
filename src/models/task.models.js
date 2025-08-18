import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import UserModel from "./user.model.js"; 

export const TaskModel = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
    tableName: "tasks",
  }
);

TaskModel.belongsTo(UserModel, { foreignKey: "user_id", as: "author" });

export default TaskModel;
