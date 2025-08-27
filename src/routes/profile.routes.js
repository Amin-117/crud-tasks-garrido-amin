import { Router } from "express";
import { createProfile, getProfiles, getProfileById, updateProfile, deleteProfile } from "../controllers/profile.controller.js";
import { validator } from "../middlewares/validator.js";
import { 
  createProfileValidation, 
  updateProfileValidation, 
  getProfileValidation, 
  deleteProfileValidation, 
  getProfilesValidation
} from "../middlewares/validations/profile.validation.js";

const router = Router();

router.post("/", createProfileValidation, validator, createProfile);
router.get("/", getProfilesValidation, validator, getProfiles);
router.get("/:id", getProfileValidation, validator, getProfileById);
router.put("/:id", updateProfileValidation, validator, updateProfile);
router.delete("/:id", deleteProfileValidation, validator, deleteProfile);

export default router;
