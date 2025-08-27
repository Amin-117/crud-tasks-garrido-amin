import { body, param } from "express-validator";
import { ProfileModel } from "../../models/profile.model.js";
import UserModel from "../../models/user.models.js";

export const createProfileValidation = [
  body("user_id")
    .notEmpty()
    .withMessage("El campo user_id es obligatorio")
    .isInt()
    .withMessage("El user_id debe ser un número entero")
    .custom(async (value) => {
      const user = await UserModel.findByPk(value);
      if (!user) {
        throw new Error("El usuario no existe");
      }
    }),
  body("bio")
    .optional()
    .isString()
    .withMessage("El campo bio debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("El bio no debe superar los 255 caracteres"),
  body("avatar_url")
    .optional()
    .isString()
    .withMessage("El campo avatar_url debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("El avatar_url no debe superar los 255 caracteres"),
];

export const updateProfileValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un entero")
    .custom(async (value) => {
      const profile = await ProfileModel.findByPk(value);
      if (!profile) {
        throw new Error("El perfil no existe");
      }
    }),
  body("bio")
    .optional()
    .isString()
    .withMessage("El campo bio debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("El bio no debe superar los 255 caracteres"),
  body("avatar_url")
    .optional()
    .isString()
    .withMessage("El campo avatar_url debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("El avatar_url no debe superar los 255 caracteres"),
    ];