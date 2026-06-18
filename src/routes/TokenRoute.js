import { Router } from "express";
const router = Router()
import TokenController from "../controllers/TokenController.js";

router.post("/tokens", TokenController.createToken)

export default router