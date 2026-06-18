import User from "../models/UserModel.js"

async function store (req, res) {
    try{
        if(!req.body) {
            res.status(400).json({
                "errors": "Verifique os dados informados"
            })
            return
        }

        const user = await User.create(req.body)

        const { id, nome, email, telefone, role } = user

        return res.status(201).json({id, nome, email, telefone, role})
    }catch(e){
        console.log(e)
        return res.status(400).json({
            errors: e.errors.map((err) => 
            err.message)
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

export default {
    store,
    index
}