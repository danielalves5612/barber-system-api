import User from "../models/UserModel.js"


async function AdminRequired(req, res, next){
    try{
        if(!req.userId){
            return res.status(401).json({
                error: "Login Required"
            })
        }

        const user = await User.findByPk(req.userId)

        if(!user){
            return res.status(404).json({
                error: "Usuário não encontrado"
            })
        }

        if(user.role !== 'admin'){
            return res.status(401).json({
                error: "Para acessar esse serviço, você precisa ser um administrador"
            })
        }

        return next()
    }catch(e){
        console.log(e)
        return res.status(401).json({
            error: "Para acessar esse serviço, você precisa ser um administrador"
        })
    }
}

export default AdminRequired