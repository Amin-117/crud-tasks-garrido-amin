import { body, param } from "express-validator";
import { User } from "../../models/users.model.js";

//  Validación para crear usuario
export const createUserValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("El nombre es obligatorio")
    .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres")
    .isString().withMessage("El nombre debe ser un texto"),

  body("email")
    .trim()
    .notEmpty().withMessage("El email es obligatorio")
    .isEmail().withMessage("Debe ser un email válido")
    .custom(async (email) => {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        throw new Error("El email ya está registrado");
      }
      return true;
    }),

  body("password")
    .trim()
    .notEmpty().withMessage("La contraseña es obligatoria")
    .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),
];

// Validación para actualizar usuario
export const updateUserValidation = [
  param("id")
    .isInt().withMessage("El ID debe ser un número entero")
    .custom(async (id) => {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("No existe un usuario con ese ID");
      }
      return true;
    }),

  body("name")
    .optional()
    .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres"),

  body("email")
    .optional()
    .isEmail().withMessage("Debe ser un email válido")
    .custom(async (email, { req }) => {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser && existingUser.id !== parseInt(req.params.id)) {
        throw new Error("El email ya está en uso por otro usuario");
      }
      return true;
    }),

  body("password")
    .optional()
    .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),
];

//  Validación para obtener usuario por ID
export const getUserByIdValidation = [
  param("id")
    .isInt().withMessage("El ID debe ser un número entero")
    .custom(async (id) => {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("No existe un usuario con ese ID");
      }
      return true;
    }),
];

// Validación para eliminar usuario
export const deleteUserValidation = [
  param("id")
    .isInt().withMessage("El ID debe ser un número entero")
    .custom(async (id) => {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("No existe un usuario con ese ID");
      }
      return true;
    }),
];
