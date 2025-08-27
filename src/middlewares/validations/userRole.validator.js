import { body, param } from "express-validator";
import UserModel from "../../models/user.models.js";
import RoleModel from "../../models/role.model.js";
import UserRoleModel from "../../models/userRole.model.js";

// Crear una relación usuario-rol
export const createUserRoleValidation = [
  body("user_id")
    .notEmpty().withMessage("El campo user_id es obligatorio")
    .isInt().withMessage("El user_id debe ser un número entero")
    .custom(async (value) => {
      const user = await UserModel.findByPk(value);
      if (!user) {
        throw new Error("No existe un usuario con ese id");
      }
    }),

  body("role_id")
    .notEmpty().withMessage("El campo role_id es obligatorio")
    .isInt().withMessage("El role_id debe ser un número entero")
    .custom(async (value) => {
      const role = await RoleModel.findByPk(value);
      if (!role) {
        throw new Error("No existe un rol con ese id");
      }
    }),

  body().custom(async (value, { req }) => {
    const existing = await UserRoleModel.findOne({
      where: { user_id: req.body.user_id, role_id: req.body.role_id },
    });
    if (existing) {
      throw new Error("Este usuario ya tiene asignado ese rol");
    }
    return true;
  }),
];

// Actualizar relación usuario-rol
export const updateUserRoleValidation = [
  param("id")
    .isInt().withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const userRole = await UserRoleModel.findByPk(value);
      if (!userRole) {
        throw new Error("No existe una relación usuario-rol con ese id");
      }
    }),

  body("user_id")
    .optional()
    .isInt().withMessage("El user_id debe ser un número entero")
    .custom(async (value) => {
      if (value) {
        const user = await UserModel.findByPk(value);
        if (!user) {
          throw new Error("No existe un usuario con ese id");
        }
      }
    }),

  body("role_id")
    .optional()
    .isInt().withMessage("El role_id debe ser un número entero")
    .custom(async (value) => {
      if (value) {
        const role = await RoleModel.findByPk(value);
        if (!role) {
          throw new Error("No existe un rol con ese id");
        }
      }
    }),
];

// Obtener relación usuario-rol por ID
export const getUserRoleValidation = [
  param("id")
    .isInt().withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const userRole = await UserRoleModel.findByPk(value);
      if (!userRole) {
        throw new Error("No existe una relación usuario-rol con ese id");
      }
    }),
];

// Eliminar relación usuario-rol
export const deleteUserRoleValidation = [
  param("id")
    .isInt().withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const userRole = await UserRoleModel.findByPk(value);
      if (!userRole) {
        throw new Error("No existe una relación usuario-rol con ese id");
      }
    }),
];
