import { Router } from "express";
import UserController from "../controllers/UserController.js";
import LoginRequired from "../middlewares/loginRequired.js";
import AdminRequired from "../middlewares/AdminRequired.js";

const router = Router()

router.post("/users", LoginRequired, AdminRequired, UserController.store)
router.get("/users", LoginRequired, AdminRequired, UserController.index)
router.get("/users/:id", LoginRequired, AdminRequired, UserController.show)
router.put("/users/:id", LoginRequired, AdminRequired, UserController.update)
router.delete("/users/:id", LoginRequired, AdminRequired, UserController.destroy)

export default router