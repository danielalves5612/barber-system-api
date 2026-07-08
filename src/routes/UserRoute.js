import { Router } from "express";
import UserController from "../controllers/UserController.js";
import LoginRequired from "../middlewares/LoginRequired.js";
import RoleRequired from "../middlewares/RoleRequired.js";

const router = Router()

router.post("/users", LoginRequired, RoleRequired('admin'), UserController.store)
router.get("/users", LoginRequired, RoleRequired('admin'), UserController.index)
router.get("/users/:id", LoginRequired, RoleRequired('admin'), UserController.show)
router.put("/users/:id", LoginRequired, RoleRequired('admin'), UserController.update)
router.delete("/users/:id", LoginRequired, RoleRequired('admin'), UserController.destroy)

export default router