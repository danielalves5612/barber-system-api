import User from "../models/UserModel.js"

async function store (req, res) {
    try{
        if(!req.body) {
            res.status(400).json({
                "errors": "Verifique os dados informados"
            })
            return
        }

        const { nome, email, telefone, password } = req.body

        const user = await User.create({
            nome, 
            email, 
            telefone, 
            password,
            role: "cliente",
        })

        const { id, role } = user

        return res.status(201).json({id, nome, email, telefone, role})
    }catch(e){
        return res.status(400).json({
            errors: e.errors? e.errors.map((err) => err.message) : [e.message]
        })
    }
}

async function index(req, res){
    try{
        const users = await User.findAll( { attributes: ["id", "nome", "email", "telefone", "role"] })

        return res.status(200).json(users)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: "Falha ao buscar usuário, tente novamente"
        })
    }
}

async function show(req,res){
    try{
        if(!req.params.id){
            return res.status(400).json({
                error: "Por favor, digite um ID válido"
            })
        }

        const user = await User.findByPk(req.params.id, 
            { attributes: ["id", "nome", "email", "telefone", "role"]})

         if(!user){
            return res.status(404).json({
                errors: "Usuário não encontrado, tente novamente"
            })
         }   

        return res.status(200).json(user)
    }catch(e){
        console.log(e)
        return res.status(404).json({
            error: "Falha ao encontrar usuário, tente novamente."
        })
    }
}

async function update(req, res){
    try{

        if(!req.body){
            return res.status(400).json({
                error: "Por favor, informe os campos necessários"
            })
        }

        if(!req.params.id){
            return res.status(400).json({
                error: "Por favor, digite um ID válido"
            })
        }

        const user = await User.findByPk(req.params.id, 
            { attributes: ["id", "nome", "email", "telefone", "role"]})

        if(!user){
            return res.status(404).json({
                error: "Falha ao encontrar usuário, tente novamente."
            })
        }

        const novoUser = await user.update(req.body)

        const { id, nome, email, telefone, role } = novoUser

        return res.status(200).json({ id, nome, email, telefone, role })
    }catch(e){
        return res.status(500).json({
            error: "Falha ao atualizar o usuário, tente novamente."
        })
    }
}

async function destroy(req, res){
    try{
        if(!req.params.id){
            return res.status(400).json({
                error: "Por favor, digite um ID válido"
            })
        }

        const id = req.params.id

        const user = await User.findByPk(id)

        if(!user){
            return res.status(404).json({
                error: "Nenhum usuário encontrado"
            })
        }

        const { nome } = user

        await user.destroy()

        return res.status(200).json(`O usuário ${nome}, foi deletado com sucesso!`)
    }catch(e){
        console.log(e)
        res.status(500).json({
            error: "Não foi possível deletar o usuário"
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