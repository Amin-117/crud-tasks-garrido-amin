import express from "express";
import {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile
} from "../controllers/profile.controller.js";

const routes = express.Router();

routes.post("/", createProfile);
routes.get("/", getAllProfiles);
routes.get("/:id", getProfileById);
routes.put("/:id", updateProfile);
routes.delete("/:id", deleteProfile);

export default routes;
