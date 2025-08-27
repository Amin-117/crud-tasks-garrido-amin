import { Router } from "express";
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from "../controllers/task.controller.js";
import { validator } from "../middlewares/validator.js";
import { 
  createTaskValidation, 
  updateTaskValidation, 
  getTaskByIdValidation, 
  deleteTaskValidation 
} from "../middlewares/validations/task.validation.js";

const taskRoutes = Router();

taskRoutes.post("/", createTaskValidation, validator, createTask);
taskRoutes.get("/", getTasks);
taskRoutes.get("/:id", getTaskByIdValidation, validator, getTaskById);
taskRoutes.put("/:id", updateTaskValidation, validator, updateTask);
taskRoutes.delete("/:id", deleteTaskValidation, validator, deleteTask);

export default taskRoutes;
