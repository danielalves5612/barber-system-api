import Appointment from "../models/AppointmentModel.js"
import User from "../models/UserModel.js"

async function store(req, res){
    try{
        if(!req.body){
            return res.status(400).json({
                error: "Por favor, digite as informações necessárias"
            })
        }

        const { cliente_id, barbeiro_id, data, hora } = req.body

        const cliente = await User.findByPk(cliente_id)

        if(!cliente){
            return res.status(400).json({
                error: "Nenhum cliente encontrado com esse ID"
            })
        }

        if(cliente.role !== "cliente"){
            return res.status(400).json({
                error: "Para gerar um agendamento, o usuário precisa ser um cliente"
            })
        }

        const barbeiro = await User.findByPk(barbeiro_id)

        if(!barbeiro){
            return res.status(400).json({
                error: "Nenhum barbeiro encontrado com esse ID"
            })
        }

        if(barbeiro.role !== "barbeiro"){
            return res.status(400).json({
                error: "Para gerar um agendamento, informe um barbeiro disponível"
            })
        }

        const appointmentExist = await Appointment.findOne({where: {barbeiro_id, data, hora}})

        if(appointmentExist !== null){
            return res.status(400).json({
                error: "Não é possível realizar um agendamento, em um horário e data já ocupado."
            })
        }

        const appointment = await Appointment.create(req.body)

        if(!appointment){
            return res.status(400).json({
                error: "Erro ao gerar agendamento"
            })
        }

        const {id, data: appointmentData, hora: appointmentHora, status, cliente_id: appointmentClienteId, barbeiro_id: appointmentBarbeiroId} = appointment

        return res.status(201).json({id, data: appointmentData, hora: appointmentHora, status, cliente_id: appointmentClienteId, barbeiro_id: appointmentBarbeiroId})

    }catch(e){
        return res.status(400).json({
            errors: e.errors.map((err) => err.message)
        })
    }
}

async function index(req, res){
    try{
        const appointment = await Appointment.findAll({ attributes: ["id", "data", "hora", "status", "cliente_id", "barbeiro_id"]})

        return res.status(200).json(appointment)
    }catch(e){
        return res.status(400).json({
            error: "Erro ao buscar agendamentos, tente novamente"
        })
    }
}

async function show(req, res){
    try{
        const id = req.params.id

        if(!id){
            return res.status(400).json({
                error: "Por favor, digite um ID"
            })
        }

        const appointment = await Appointment.findByPk(id, {attributes: ["id", "data", "hora", "status", "cliente_id", "barbeiro_id"]})

        if(!appointment){
            return res.status(400).json({
                error: "Nenhum agendamento encontrado, com o ID digitado"
            })
        }

        return res.status(200).json(appointment)
    }catch(e){
        return res.status(400).json({
            error: "Falha ao buscar agendamento, verifique o ID e tente novamente"
        })
    }
}

async function update(req, res){
    try{
        const idBusca = req.params.id

        if(!idBusca){
            return res.status(400).json({
                error: "Por favor, digite um ID"
            })
        }

        if(!req.body){
            return res.status(400).json({
                error: "Por favor, digite as informações para atualizar o agendamento"
            })
        }

        const { cliente_id, barbeiro_id } = req.body

        const cliente = await User.findByPk(cliente_id)

        if(!cliente){
            return res.status(400).json({
                error: "Nenhum cliente encontrado com esse ID"
            })
        }

        if(cliente.role !== "cliente"){
            return res.status(400).json({
                error: "Para gerar um agendamento, o usuário precisa ser um cliente"
            })
        }

        const barbeiro = await User.findByPk(barbeiro_id)

        if(!barbeiro){
            return res.status(400).json({
                error: "Nenhum barbeiro encontrado com esse ID"
            })
        }

        if(barbeiro.role !== "barbeiro"){
            return res.status(400).json({
                error: "Para gerar um agendamento, informe um barbeiro disponível"
            })
        }

        const appointment = await Appointment.findByPk(idBusca)

        if(!appointment){
            return res.status(400).json({
                error: "Nenhum agendamento localizado com o ID digitado"
            })
        }

        const appointmentUpdate = await appointment.update(req.body)

        const { id, data, hora, status, cliente_id: appointmentClienteId, barbeiro_id: appointmentBarbeiroId} = appointmentUpdate

        return res.status(200).json({ id, data, hora, status, cliente_id, barbeiro_id})
    }catch(e){
        return res.status(400).json({
            error: "Erro ao atualizar o agendamento, tente novamente"
        })
    }
}

async function destroy(req, res){
    try{
        const idBusca = req.params.id

        if(!idBusca){
            return res.status(400).json({
                error: "Por favor, informe um ID válido"
            })
        }

        const appointment = await Appointment.findByPk(idBusca)

        if(!appointment){
            return res.status(400).json({
                error: "Nenhum agendamento localizado, com o ID informado"
            })
        }

        const {id} = appointment

        await appointment.destroy()

        return res.status(200).json(`O agendamento com ID ${id}, foi deletado com Sucesso!`)
    }catch(e){
        return res.status(400).json({
            error: "Falha ao deletar agendamento, tente novamente"
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