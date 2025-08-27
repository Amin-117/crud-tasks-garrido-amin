import { Router } from "express";
import { createUserRole, getUserRoles, getUserRoleById, updateUserRole, deleteUserRole } from "../controllers/userRole.controller.js";
import { validator } from "../middlewares/validator.js";
import { 
  createUserRoleValidation, 
  updateUserRoleValidation, 
  getUserRoleValidation, 
  deleteUserRoleValidation 
} from "../middlewares/validations/userRole.validation.js";

const userRoleRoutes = Router();

userRoleRoutes.post("/", createUserRoleValidation, validator, createUserRole);
userRoleRoutes.get("/", getUserRoles);
userRoleRoutes.get("/:id", getUserRoleValidation, validator, getUserRoleById);
userRoleRoutes.put("/:id", updateUserRoleValidation, validator, updateUserRole);
userRoleRoutes.delete("/:id", deleteUserRoleValidation, validator, deleteUserRole);

export default userRoleRoutes;
