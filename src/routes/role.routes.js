import { Router } from "express";
import { createRole, getRoles, getRoleById, updateRole, deleteRole } from "../controllers/role.controller.js";
import { validator } from "../middlewares/validator.js";
import { 
  createRoleValidation, 
  updateRoleValidation, 
  getRoleByIdValidation, 
  deleteRoleValidation 
} from "../middlewares/validations/role.validation.js";

const rolesRoutes = Router();

rolesRoutes.post("/", createRoleValidation, validator, createRole);
rolesRoutes.get("/", getRoles);
rolesRoutes.get("/:id", getRoleByIdValidation, validator, getRoleById);
rolesRoutes.put("/:id", updateRoleValidation, validator, updateRole);
rolesRoutes.delete("/:id", deleteRoleValidation, validator, deleteRole);

export default rolesRoutes;
