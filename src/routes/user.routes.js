import { Router } from "express";
import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";
import { validator } from "../middlewares/validator.js";
import { 
  createUserValidation, 
  updateUserValidation, 
  getUserByIdValidation, 
  deleteUserValidation 
} from "../middlewares/validations/user.validation.js";

const userRoutes = Router();

userRoutes.post("/", createUserValidation, validator, createUser);
userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUserByIdValidation, validator, getUserById);
userRoutes.put("/:id", updateUserValidation, validator, updateUser);
userRoutes.delete("/:id", deleteUserValidation, validator, deleteUser);

export default userRoutes;
