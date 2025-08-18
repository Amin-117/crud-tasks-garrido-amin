import express from "express";
import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole
} from "../controllers/role.controller.js";

const routes = express.Router();

routes.post("/", createRole);
routes.get("/", getAllRoles);
routes.get("/:id", getRoleById);
routes.put("/:id", updateRole);
routes.delete("/:id", deleteRole);

export default routes;
