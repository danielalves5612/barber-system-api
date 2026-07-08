import User from "../models/UserModel.js";

function RoleRequired(...rolesPermitidas) {
    return async function(req, res, next) {
            try{
                console.log(req.userId)
                

                const id = req.userId

                if(!id){
                    return res.status(401).json({
                        error: 'Por favor, informe um ID válido'
                    })
                }

                const user = await User.findByPk(id)

                console.log(user.role)

                if(!user){
                    return res.status(401).json({
                        error: 'Usuário não autenticado'
                    })
                }

                console.log(rolesPermitidas)

                if(!rolesPermitidas.includes(user.role)){
                    return res.status(403).json({
                        error: 'Usuário não possui permissão para acessar este recurso'
                    })
                }

                return next()

            }catch(e){
                return res.status(400).json({
                    error: 'Erro ao verificar permissões do usuário'
                })
            }
        }
}

export default RoleRequired