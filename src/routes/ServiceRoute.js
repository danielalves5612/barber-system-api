import { Router } from "express";
const router = Router()
import ServiceController from "../controllers/ServiceController.js";
import LoginRequired from "../middlewares/LoginRequired.js"
import RoleRequired from "../middlewares/RoleRequired.js"

router.post('/services', LoginRequired, RoleRequired('admin'), ServiceController.store)
router.get('/services', ServiceController.index)
router.get('/services/:id', ServiceController.show)
router.put('/services/:id', LoginRequired, RoleRequired('admin'), ServiceController.update)
router.delete('/services/:id', LoginRequired, RoleRequired('admin'), ServiceController.destroy)

export default router