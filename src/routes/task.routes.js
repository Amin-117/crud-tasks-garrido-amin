import { Router } from "express";
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from "../controllers/task.controller.js";
import { validator } from "../middlewares/validator.js";
import { 
  createTaskValidation, 
  updateTaskValidation, 
  getTaskByIdValidation, 
  deleteTaskValidation 
} from "../middlewares/validations/task.validation.js";

const router = Router();

router.post("/", createTaskValidation, validator, createTask);
router.get("/", getTasks);
router.get("/:id", getTaskByIdValidation, validator, getTaskById);
router.put("/:id", updateTaskValidation, validator, updateTask);
router.delete("/:id", deleteTaskValidation, validator, deleteTask);

export default router;
