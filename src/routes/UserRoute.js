import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router()

router.post("/users", UserController.store)
router.get("/users", UserController.index)
router.get("/users/:id", UserController.show)
router.put("/users/:id", UserController.update)
router.delete("/users/:id", UserController.destroy)

export default router