import { Router } from "express";
import { createRole, getRoles, getRoleById, updateRole, deleteRole } from "../controllers/role.controller.js";
import { validator } from "../middlewares/validator.js";
import { 
  createRoleValidation, 
  updateRoleValidation, 
  getRoleByIdValidation, 
  deleteRoleValidation 
} from "../middlewares/validations/role.validation.js";

const router = Router();

router.post("/", createRoleValidation, validator, createRole);
router.get("/", getRoles);
router.get("/:id", getRoleByIdValidation, validator, getRoleById);
router.put("/:id", updateRoleValidation, validator, updateRole);
router.delete("/:id", deleteRoleValidation, validator, deleteRole);

export default router;
