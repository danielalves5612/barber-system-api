import { Router } from "express";
const router = Router()
import PhotoController from "../controllers/PhotoController.js";
import multer from "multer";
import multerConfig from "../config/multerConfig.js";

const upload = multer(multerConfig)

router.post('/photos', upload.single('photo'), PhotoController.store)
router.get('/photos', PhotoController.index)
router.get('/photos/:id', PhotoController.show)
router.put('/photos/:id', upload.single('photo'), PhotoController.update)
router.delete('/photos/:id', PhotoController.destroy)

export default router