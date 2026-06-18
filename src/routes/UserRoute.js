import { Router } from "express";
import UserController from "../controllers/UserController.js";
import LoginRequired from "../middlewares/loginRequired.js";

const router = Router()

router.post("/users", LoginRequired, UserController.store)
router.get("/users", LoginRequired, UserController.index)
router.get("/users/:id", LoginRequired, UserController.show)
router.put("/users/:id", LoginRequired, UserController.update)
router.delete("/users/:id", LoginRequired, UserController.destroy)

export default router