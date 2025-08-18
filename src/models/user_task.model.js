import UserModel from "./user.models.js";
import TaskModel from "./task.models.js";

UserModel.hasMany(TaskModel, { foreignKey: "user_id", as: "tasks" });

TaskModel.belongsTo(UserModel, { foreignKey: "user_id", as: "author" });

export { UserModel, TaskModel };
