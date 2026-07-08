import jwt from "jsonwebtoken"

export default function LoginRequired(req, res, next){
    try{

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

        const payload = jwt.verify(token, process.env.TOKEN_SECRET)
        
        req.userId = payload.id
        req.userEmail = payload.email

        return next()
    }catch(e){
        return res.status(401).json({
            error: "Login Required"
        })
    }

}