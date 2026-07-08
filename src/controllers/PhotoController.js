import path, { resolve } from "path";
import Photo from "../models/PhotoModel.js";
import Service from "../models/ServiceModel.js"
import { unlink } from 'fs/promises'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

async function store(req, res) {
    try{
        if(!req.file){
        return res.status(400).json({
            error: 'Por favor, envie um arquivo'
        })
        }

        const idBusca = req.body.service_id

        if(!idBusca){
            return res.status(400).json({
                error: 'Por favor, verifique o ID do Serviço'
            })
        }

        const service = await Service.findByPk(idBusca)

        if(!service){
            return res.status(400).json({
                error: 'Falha ao localizar serviço existente'
            })
        }

        const photo = await Photo.create({
            originalname: req.file.originalname,
            filename: req.file.filename,
            service_id: req.body.service_id
        })

        const { id, originalname, filename, url,  service_id } = photo

        return res.status(201).json({ id, originalname, filename, url, service_id })
    }catch(e){
        return res.status(400).json({
            errors: e.errors? e.errors.map((err) => err.message) : [e.message]
        })
    }
}

async function index(req, res) {
    try{
        const photos = await Photo.findAll({attributes: ["id", "originalname", "filename", "service_id"]})

        return res.status(200).json(photos)
    }catch(e){
        return res.status(400).json({
            error: 'Erro ao exibir fotos, tente novamente'
        })
    }
}

async function show(req, res) {
    try{
        const idBusca = req.params.id

        if(!idBusca){
            return res.status(400).json({
                error: "Por favor, digite um ID válido"
            })
        }

        const photo = await Photo.findByPk(idBusca)

        if(!photo){
            return res.status(400).json({
                error: 'Nenhuma foto localizada com o ID digitado'
            })
        }

        const { id, originalname, filename, url, service_id} = photo

        return res.status(200).json({ id, originalname, filename, url, service_id})
    }catch(e){
        return res.status(400).json({
            error: 'Não foi possível exibir a foto, verifique o ID e tente novamente'
        })
    }
}

async function update(req, res) {
    try{
        const idBusca = req.params.id

        if(!idBusca){
            return res.status(400).json({
                error: 'Por favor, digite um ID válido'
            })
        }

        const photo = await Photo.findByPk(idBusca)

        if(!photo){
            return res.status(400).json({
                error: 'Nenhuma foto localizada, com o ID digitado'
            })
        }

        if(!req.body.service_id){
            return res.status(400).json({
                error: 'Por favor, informe o ID do serviço'
            })
        }

        const service = await Service.findByPk(req.body.service_id)

        if(!service){
            return res.status(400).json({
                error: 'O serviço informado não é válido'
            })
        }

        if(!req.file){
            return res.status(400).json({
                error: 'Por favor, envie um arquivo'
            })
        }

        const photoUpdate = await photo.update({
            originalname: req.file.originalname,
            filename: req.file.filename,
            service_id: req.body.service_id
        })

        const { id, originalname, filename, service_id } = photoUpdate

        return res.status(200).json({ id, originalname, filename, service_id })
    }catch(e){
        return res.status(400).json({
            error: 'Erro ao atualizar a foto, tente novamente'
        })
    }
}

async function destroy(req, res) {
    try{
        const idBusca = req.params.id

        if(!idBusca){
            return res.status(400).json({
                error: 'Por favor, digite um ID válido'
            })
        }

        const photo = await Photo.findByPk(idBusca)

        if(!photo){
            return res.status(400).json({
                error: 'Nenhuma foto localizada, com o ID digitado'
            })
        }

        const {id, filename} = photo

        const caminhoArquivo = resolve(__dirname, '..', 'uploads', 'images', filename)

        try{
            await unlink(caminhoArquivo)
        }catch(e){
            console.log('Arquivo já não existe')
        }

        await photo.destroy()

        return res.status(200).json(`A foto com id ${id}, foi apagada com sucesso`)
    }catch(e){
        return res.status(400).json({
            error: 'Erro ao apagar foto, tente novamente'
        })
    }
}

export default {
    store,
    index, 
    show, 
    update,
    destroy
}