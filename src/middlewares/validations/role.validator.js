import { body, param } from "express-validator";
import { Role } from "../../models/role.model.js"; 

//  Validación para crear rol
export const createRoleValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("El nombre del rol es obligatorio")
    .isLength({ min: 3 }).withMessage("El nombre del rol debe tener al menos 3 caracteres")
    .custom(async (name) => {
      const existingRole = await Role.findOne({ where: { name } });
      if (existingRole) {
        throw new Error("El nombre del rol ya está registrado");
      }
      return true;
    }),

  body("description")
    .optional()
    .isLength({ max: 255 }).withMessage("La descripción no puede superar los 255 caracteres"),
];

//  Validación para actualizar rol
export const updateRoleValidation = [
  param("id")
    .isInt().withMessage("El ID debe ser un número entero")
    .custom(async (id) => {
      const role = await Role.findByPk(id);
      if (!role) {
        throw new Error("No existe un rol con ese ID");
      }
      return true;
    }),

  body("name")
    .optional()
    .isLength({ min: 3 }).withMessage("El nombre del rol debe tener al menos 3 caracteres")
    .custom(async (name, { req }) => {
      if (!name) return true; // si no se envió, no valida
      const existingRole = await Role.findOne({ where: { name } });
      if (existingRole && existingRole.id !== parseInt(req.params.id)) {
        throw new Error("El nombre del rol ya está en uso por otro rol");
      }
      return true;
    }),

  body("description")
    .optional()
    .isLength({ max: 255 }).withMessage("La descripción no puede superar los 255 caracteres"),
];

//  Validación para obtener rol por ID
export const getRoleByIdValidation = [
  param("id")
    .isInt().withMessage("El ID debe ser un número entero")
    .custom(async (id) => {
      const role = await Role.findByPk(id);
      if (!role) {
        throw new Error("No existe un rol con ese ID");
      }
      return true;
    }),
];

//  Validación para eliminar rol
export const deleteRoleValidation = [
  param("id")
    .isInt().withMessage("El ID debe ser un número entero")
    .custom(async (id) => {
      const role = await Role.findByPk(id);
      if (!role) {
        throw new Error("No existe un rol con ese ID");
      }
      return true;
    }),
];
