import { body, param } from "express-validator";
import { Task } from "../../models/task.model.js";
import { User } from "../../models/users.model.js"; 

//  Validación para crear tarea
export const createTaskValidation = [
  body("title")
    .trim()
    .notEmpty().withMessage("El título es obligatorio")
    .isLength({ min: 3 }).withMessage("El título debe tener al menos 3 caracteres"),

  body("description")
    .optional()
    .isLength({ max: 255 }).withMessage("La descripción no puede superar los 255 caracteres"),

  body("status")
    .optional()
    .isIn(["pending", "in-progress", "done"])
    .withMessage("El estado debe ser 'pending', 'in-progress' o 'done'"),

  body("userId")
    .notEmpty().withMessage("El userId es obligatorio")
    .isInt().withMessage("El userId debe ser un número entero")
    .custom(async (userId) => {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error("El usuario asignado no existe");
      }
      return true;
    }),
];

//  Validación para actualizar tarea
export const updateTaskValidation = [
  param("id")
    .isInt().withMessage("El ID debe ser un número entero")
    .custom(async (id) => {
      const task = await Task.findByPk(id);
      if (!task) {
        throw new Error("No existe una tarea con ese ID");
      }
      return true;
    }),

  body("title")
    .optional()
    .isLength({ min: 3 }).withMessage("El título debe tener al menos 3 caracteres"),

  body("description")
    .optional()
    .isLength({ max: 255 }).withMessage("La descripción no puede superar los 255 caracteres"),

  body("status")
    .optional()
    .isIn(["pending", "in-progress", "done"])
    .withMessage("El estado debe ser 'pending', 'in-progress' o 'done'"),

  body("userId")
    .optional()
    .isInt().withMessage("El userId debe ser un número entero")
    .custom(async (userId) => {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error("El usuario asignado no existe");
      }
      return true;
    }),
];

//  Validación para obtener tarea por ID
export const getTaskByIdValidation = [
  param("id")
    .isInt().withMessage("El ID debe ser un número entero")
    .custom(async (id) => {
      const task = await Task.findByPk(id);
      if (!task) {
        throw new Error("No existe una tarea con ese ID");
      }
      return true;
    }),
];

//  Validación para eliminar tarea
export const deleteTaskValidation = [
  param("id")
    .isInt().withMessage("El ID debe ser un número entero")
    .custom(async (id) => {
      const task = await Task.findByPk(id);
      if (!task) {
        throw new Error("No existe una tarea con ese ID");
      }
      return true;
    }),
];
