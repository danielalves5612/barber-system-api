import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router()

router.post("/users", UserController.store)
router.get("/users", UserController.index)

export default router