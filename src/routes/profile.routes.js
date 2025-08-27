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

const ProfileRoutes = Router();

ProfileRoutes.post("/", createProfileValidation, validator, createProfile);
ProfileRoutes.get("/", getProfilesValidation, validator, getProfiles);
ProfileRoutes.get("/:id", getProfileValidation, validator, getProfileById);
ProfileRoutes.put("/:id", updateProfileValidation, validator, updateProfile);
ProfileRoutes.delete("/:id", deleteProfileValidation, validator, deleteProfile);

export default ProfileRoutes;
