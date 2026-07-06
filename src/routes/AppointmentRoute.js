import { Router } from "express";
const router = Router()
import AppointmentController from "../controllers/AppointmentController.js";

router.post('/appointments', AppointmentController.store)
router.get('/appointments', AppointmentController.index)
router.get('/appointments/:id', AppointmentController.show)
router.put('/appointments/:id', AppointmentController.update)
router.delete('/appointments/:id', AppointmentController.destroy)

export default router