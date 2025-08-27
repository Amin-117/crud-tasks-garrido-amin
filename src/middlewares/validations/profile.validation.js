import { body, param, query } from "express-validator";
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
        throw new Error("No existe ningún usuario con ese id");
      }
      const existingProfile = await ProfileModel.findOne({ where: { user_id: value } });
      if (existingProfile) {
        throw new Error("Este usuario ya tiene un perfil asociado");
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
    .isURL()
    .withMessage("El avatar_url debe ser una URL válida")
    .isLength({ max: 255 })
    .withMessage("El avatar_url no debe superar los 255 caracteres"),
];

export const updateProfileValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const profile = await ProfileModel.findByPk(value);
      if (!profile) {
        throw new Error("No existe ningún perfil con ese id");
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
    .isURL()
    .withMessage("El avatar_url debe ser una URL válida")
    .isLength({ max: 255 })
    .withMessage("El avatar_url no debe superar los 255 caracteres"),
];

export const getProfileValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const profile = await ProfileModel.findByPk(value);
      if (!profile) {
        throw new Error("No existe ningún perfil con ese id");
      }
    }),
];

export const deleteProfileValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const profile = await ProfileModel.findByPk(value);
      if (!profile) {
        throw new Error("No existe ningún perfil con ese id");
      }
    }),
];

