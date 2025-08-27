import { Router } from "express";
import { createUserRole, getUserRoles, getUserRoleById, updateUserRole, deleteUserRole } from "../controllers/userRole.controller.js";
import { validator } from "../middlewares/validator.js";
import { 
  createUserRoleValidation, 
  updateUserRoleValidation, 
  getUserRoleValidation, 
  deleteUserRoleValidation 
} from "../middlewares/validations/userRole.validation.js";

const router = Router();

router.post("/", createUserRoleValidation, validator, createUserRole);
router.get("/", getUserRoles);
router.get("/:id", getUserRoleValidation, validator, getUserRoleById);
router.put("/:id", updateUserRoleValidation, validator, updateUserRole);
router.delete("/:id", deleteUserRoleValidation, validator, deleteUserRole);

export default router;
