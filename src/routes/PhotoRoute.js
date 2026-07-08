import { Router } from "express";
const router = Router()
import PhotoController from "../controllers/PhotoController.js";
import multer from "multer";
import multerConfig from "../config/multerConfig.js";
import LoginRequired from "../middlewares/LoginRequired.js";
import RoleRequired from "../middlewares/RoleRequired.js";

const upload = multer(multerConfig)

router.post('/photos', LoginRequired, RoleRequired('admin', 'barbeiro'), upload.single('photo'), PhotoController.store)
router.get('/photos', PhotoController.index)
router.get('/photos/:id', PhotoController.show)
router.put('/photos/:id', LoginRequired, RoleRequired('admin', 'barbeiro'), upload.single('photo'), PhotoController.update)
router.delete('/photos/:id', LoginRequired, RoleRequired('admin', 'barbeiro'), PhotoController.destroy)

export default router