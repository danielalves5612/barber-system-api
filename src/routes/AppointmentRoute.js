import { Router } from "express";
const router = Router()
import AppointmentController from "../controllers/AppointmentController.js";
import LoginRequired from "../middlewares/LoginRequired.js";
import RoleRequired from "../middlewares/RoleRequired.js";

router.post('/appointments', LoginRequired, RoleRequired('admin', 'cliente'), AppointmentController.store)
router.get('/appointments', LoginRequired, RoleRequired('admin', 'barbeiro'), AppointmentController.index)
router.get('/appointments/:id', LoginRequired, AppointmentController.show)
router.put('/appointments/:id', LoginRequired, AppointmentController.update)
router.delete('/appointments/:id', LoginRequired, RoleRequired('admin'), AppointmentController.destroy)

export default router