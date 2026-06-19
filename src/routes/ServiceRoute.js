import { Router } from "express";
const router = Router()
import ServiceController from "../controllers/ServiceController.js";

router.post('/services', ServiceController.store)
router.get('/services', ServiceController.index)
router.get('/services/:id', ServiceController.show)
router.put('/services/:id', ServiceController.update)
router.delete('/services/:id', ServiceController.destroy)

export default router