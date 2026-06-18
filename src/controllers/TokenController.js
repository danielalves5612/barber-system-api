import User from "../models/UserModel.js"
import jwt from "jsonwebtoken"

async function createToken(req, res){
    try{
        if(!req.body){
            return res.status(400).json({
                error: "Por favor, preencha os campos"
            })
        }

        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })

        if(!user){
            return res.status(404).json({
                error: "E-mail ou senha inválidos"
            })
        }

        if(!user.passwordIsValid(password)){
            return res.status(400).json({
                error: "Senha incorreta"
            })
        }

        const payload = {
            id: user.id,
            email: user.email
        }

        const token = jwt.sign(
            payload,
            process.env.TOKEN_SECRET,
            {
                expiresIn: process.env.TOKEN_EXPIRATION
            }
        )

        return res.status(200).json({
            token
        })
    }catch(e){
        console.log(e)
        res.status(400).json({
            error: "Verifique as informações inseridas e tente novamente"
        })
    }
}

export default {
    createToken
}