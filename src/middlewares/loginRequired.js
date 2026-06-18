import jwt from "jsonwebtoken"

export default function LoginRequired(req, res, next){
    try{

        console.log("ENTROU NO LOGIN REQUIRED")
        console.log(req.headers.authorization)
        if(!req.headers.authorization){
        return res.status(401).json({
            error: "Login Required"
        })
        }

        const { authorization } = req.headers

        const [ tipo, token ] = authorization.split(' ')


        if(tipo !== "Bearer"){
            return res.status(401).json({
                error: "Login Required"
            })
        }

        if(!token){
            return res.status(401).json({
                error: "Login Required"
            })
        }

        console.log("TIPO: ", tipo)
        console.log("TOKEN: ", token)

        const payload = jwt.verify(token, process.env.TOKEN_SECRET)

        console.log(payload)

        req.userId = payload.id
        req.userEmail = payload.email

        return next()
    }catch(e){
        return res.status(401).json({
            error: "Login Required"
        })
    }

}