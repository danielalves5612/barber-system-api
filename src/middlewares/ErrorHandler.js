function ErrorHandler(err, req, res, next){
    if(err.code === 'LIMIT_FILE_SIZE'){
        return res.status(400).json({
            error: 'Arquivo muito grande. Envie uma imagem de até 2MB'
        })
    }

    if(err.message === 'Arquivo inválido'){
        return res.status(400).json({
            error: 'Formato inválido. Envie apenas imagens PNG ou JPEG'
        })
    }

    return res.status(500).json({
        error: 'Erro interno no servidor'
    })
}

export default ErrorHandler