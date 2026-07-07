import path, { extname, resolve,  } from 'path'
import multer from 'multer'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

export default {
    storage: multer.diskStorage({
        destination(req, file, cb){
            const caminho = resolve(__dirname, '..', 'uploads', 'images')

            cb(null, caminho)
        },

        filename(req, file, cb){
            const extensao = extname(file.originalname)

            const random = Math.floor(10000 + Math.random() * 90000)

            const nomeArquivo = `${Date.now()}_${random}${extensao}`

            cb(null, nomeArquivo)
        }
    }),
    fileFilter(req, file, cb){

        const tiposPermitidos = [
            'image/png',
            'image/jpeg'
        ]
        if(tiposPermitidos.includes(file.mimetype)){
            cb(null, true)
            return
        }

        cb(new Error('Arquivo inválido'), false)
    } ,
    limits: {
        fileSize: 10 * 1024 * 1024
    },
}