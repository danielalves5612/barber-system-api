import Service from "../models/ServiceModel.js"

async function store(req, res){
    try{
        if(!req.body){
            return res.status(400).json({
                error: "Por favor, preencha os dados necessários"
            })
        }

        const service = await Service.create(req.body)

        if(!service){
            return res.status(400).json({
                error: "Erro ao criar serviço"
            })
        }

        const { id, nome, descricao, preco, duracao, ativo} = service

        return res.status(201).json({id, nome, descricao, preco, duracao, ativo})
    }catch(e){
        return res.status(400).json({
            errors: e.errors.map((err) => err.message)
        })
    }
}

async function index(req, res){
    try{
        const service = await Service.findAll({ attributes: ["id", "nome", "descricao", "preco", "duracao", "ativo"]})

        return res.status(200).json(service)
    }catch(e){
        return res.status(400).json({
            error: "Falha ao exibir serviços, tente novamente"
        })
    }
}

async function show(req, res){
    try{
        const id = req.params.id

        if(!id){
            return res.status(400).json({
                error: "Por favor, informe o ID do serviço"
            })
        }

        const service = await Service.findByPk(id, {attributes: ["id", "nome", "descricao", "preco", "duracao", "ativo"]})

        if(!service){
            return res.status(404).json({
                error: "Nenhum serviço cadastrado com esse ID"
            })
        }

        return res.status(200).json(service)
    }catch(e){
        return res.status(400).json({
            error: "Verifique o ID digitado e tente novamente"
        })
    }
}

async function update(req, res){
    try{
        const idDeBusca = req.params.id

        if(!req.body){
            return res.status(400).json({
                error: "Informe quais dados gostaria de atualizar"
            })
        }

        if(!idDeBusca){
            return res.status(400).json({
                error: "Por favor, informe o ID do serviço"
            })
        }

        const service = await Service.findByPk(idDeBusca)

        if(!service){
            return res.status(404).json({
                error: "Nenhum serviço cadastrado com esse ID"
            })
        }

        const serviceUpdate = await service.update(req.body)

        const { id, nome, descricao, preco, duracao, ativo} = serviceUpdate

        return res.status(200).json({id, nome, descricao, preco, duracao, ativo})
    }catch(e){
        return res.status(400).json({
            error: "Nenhum serviço encontrado ou falha na busca"
        })
    }
}

async function destroy(req, res){
    try{
        const id = req.params.id

        if(!id){
            return res.status(400).json({
                error: "Por favor, informe o ID do serviço"
            })
        }

        const service = await Service.findByPk(id)

        if(!service){
            return res.status(400).json({
                error: "Nenhum serviço encontrado com o ID digitado"
            })
        }

        const { nome } = service

        await service.destroy()

        return res.status(200).json(`O ${nome} foi deletado com sucesso`)
    }catch(e){
        return res.status(400).json({
            error: "Erro ao deletar o serviço, tente novamente"
        })
    }
}

export default{
    store,
    index,
    show,
    update,
    destroy
}