import { Router } from "express";
import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";
import { validator } from "../middlewares/validator.js";
import { 
  createUserValidation, 
  updateUserValidation, 
  getUserByIdValidation, 
  deleteUserValidation 
} from "../middlewares/validations/user.validation.js";

const router = Router();

router.post("/", createUserValidation, validator, createUser);
router.get("/", getUsers);
router.get("/:id", getUserByIdValidation, validator, getUserById);
router.put("/:id", updateUserValidation, validator, updateUser);
router.delete("/:id", deleteUserValidation, validator, deleteUser);

export default router;
