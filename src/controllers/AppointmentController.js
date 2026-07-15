import Appointment from "../models/AppointmentModel.js"
import User from "../models/UserModel.js"
import Service from "../models/ServiceModel.js"

async function store(req, res){
    try{

        const { cliente_id, barbeiro_id, hora, data, service_id } = req.body

        if(!cliente_id || !barbeiro_id || !hora || !data || !service_id){
            return res.status(400).json({
                errors: ["Todos os campos são obrigatórios"]
            })
        }

        const [ horaAgendada, minutoAgendado ] = hora.split(':')

        const horaNumero = Number(horaAgendada)
        const minutoNumero = Number(minutoAgendado)

        if(horaNumero < 9 || horaNumero >= 19){
            return res.status(400).json({
                errors: ["Não é possível agendar horários, fora do expediente"]
            })
        }

        const minutosPermitidos = [0 ,30]

        if(!minutosPermitidos.includes(minutoNumero)){
            return res.status(400).json({
                errors: ['Por favor, informe um horário válido']
            })
        }

        const [ano, mes, dia] = data.split('-')

        const dataAgendamento = new Date(
            Number(ano),
            Number(mes) -1,
            Number(dia)
        )

        const dataAtual = new Date()

        dataAtual.setHours(0, 0, 0, 0)

        if(dataAgendamento < dataAtual){
            return res.status(400).json({
                errors: ['Não é possível realizar agendamentos em datas passadas']
            })
        }

        const cliente = await User.findByPk(cliente_id)

        if(!cliente){
            return res.status(400).json({
                errors: ["Nenhum cliente encontrado com esse ID"]
            })
        }

        const usuarioLogado = await User.findByPk(req.userId)

        if(!usuarioLogado){
            return res.status(400).json({
                errors: ['Nenhum usuário logado com esse ID']
            })
        }

        if(usuarioLogado.role !== 'admin'){
            if(cliente.id !== usuarioLogado.id){
                return res.status(403).json({
                    errors: ['Usuário não possui permissão necessária']
                })
            }
        }

        if(cliente.role !== "cliente"){
            return res.status(400).json({
                errors: ["Para gerar um agendamento, o usuário precisa ser um cliente"]
            })
        }

        const barbeiro = await User.findByPk(barbeiro_id)

        if(!barbeiro){
            return res.status(400).json({
                errors: ["Nenhum barbeiro encontrado com esse ID"]
            })
        }

        if(barbeiro.role !== "barbeiro"){
            return res.status(400).json({
                errors: ["Para gerar um agendamento, informe um barbeiro disponível"]
            })
        }

        const service = await Service.findByPk(service_id)

        if(!service){
            return res.status(400).json({
                errors: ["Não é possível realizar um agendamento, com um serviço inválido"]
            })
        }

        if(!service.ativo){
            return res.status(400).json({
                errors: ["Não é possível realizar um agendamento, com um serviço não ativo"]
            })
        }

        const appointmentExist = await Appointment.findOne({where: {barbeiro_id, data, hora}})

        if(appointmentExist !== null){
            return res.status(400).json({
                errors: ["Não é possível realizar um agendamento, em um horário e data já ocupado."]
            })
        }

        const appointment = await Appointment.create({
            data,
            hora,
            service_id,
            cliente_id,
            barbeiro_id,
        })

        if(!appointment){
            return res.status(400).json({
                errors: ["Erro ao gerar agendamento"]
            })
        }

        const {
                id, 
                data: appointmentData, 
                hora: appointmentHora, 
                status, 
                service_id: appointmentServiceId,
                cliente_id: 
                appointmentClienteId, 
                barbeiro_id: appointmentBarbeiroId} = appointment

        return res.status(201).json({
            id, 
            data: appointmentData, 
            hora: appointmentHora, 
            status, 
            service_id: appointmentServiceId, 
            cliente_id: appointmentClienteId, 
            barbeiro_id: appointmentBarbeiroId})

    }catch(e){
        return res.status(400).json({
            errors: e.errors? e.errors.map((err) => err.message) : [e.message]
        })
    }
}

async function index(req, res){
    try{
        const appointment = await Appointment.findAll({ 
            attributes: [
                "id", 
                "data", 
                "hora", 
                "status",
                "service_id", 
                "cliente_id", 
                "barbeiro_id"
            ],
            include: [
                {
                    model: User,
                    as: "cliente",
                    attributes: ["id", "nome", "telefone"]
                },
                {
                    model: User,
                    as: "barbeiro",
                    attributes: ["id", "nome"]
                },
                {
                    model: Service,
                    as: "service",
                    attributes: ["id", "nome", "duracao"]
                }
            ]
        })

        return res.status(200).json(appointment)
    }catch(e){
        console.log(e.message)
        return res.status(400).json({
            errors: ["Erro ao buscar agendamentos, tente novamente"]
        })
    }
}

async function show(req, res){
    try{
        const id = req.params.id

        if(!id){
            return res.status(400).json({
                errors: ["Por favor, digite um ID"]
            })
        }

        const appointment = await Appointment.findByPk(id, {
            attributes: [
                "id", 
                "data", 
                "hora", 
                "status",
                "service_id", 
                "cliente_id", 
                "barbeiro_id"
            ]
        })

        if(!appointment){
            return res.status(400).json({
                errors: ["Nenhum agendamento encontrado, com o ID digitado"]
            })
        }

        const usuarioLogado = await User.findByPk(req.userId)

        if(!usuarioLogado){
            return res.status(400).json({
                errors: ['Nenhum usuário localizado']
            })
        }

        if(usuarioLogado.role !== 'admin' && usuarioLogado.role !== 'barbeiro'){
            if(appointment.cliente_id !== usuarioLogado.id){
                return res.status(403).json({
                    errors: ['Você pode acessar, apenas o seu próprio agendamento']
                })
            }
        }

        return res.status(200).json(appointment)
    }catch(e){
        return res.status(400).json({
            errors: ["Falha ao buscar agendamento, verifique o ID e tente novamente"]
        })
    }
}

async function update(req, res){
    try{
        const idBusca = req.params.id

        if(!idBusca){
            return res.status(400).json({
                errors: ["Por favor, digite um ID"]
            })
        }

        if(!req.body){
            return res.status(400).json({
                errors: ["Por favor, digite as informações para atualizar o agendamento"]
            })
        }

        const { cliente_id, barbeiro_id, service_id } = req.body

        if(cliente_id){
            const cliente = await User.findByPk(cliente_id)

            if(!cliente){
                return res.status(400).json({
                    errors: ["Nenhum cliente encontrado com esse ID"]
                })
            }

            if(cliente.role !== "cliente"){
                return res.status(400).json({
                    errors: ["Para gerar um agendamento, o usuário precisa ser um cliente"]
                })
            }
        }

        if(barbeiro_id){
            const barbeiro = await User.findByPk(barbeiro_id)

            if(!barbeiro){
                return res.status(400).json({
                    errors: ["Nenhum barbeiro encontrado com esse ID"]
                })
            }

            if(barbeiro.role !== "barbeiro"){
                return res.status(400).json({
                    errors: ["Para gerar um agendamento, informe um barbeiro disponível"]
                })
            }
        }

        if(service_id){
            const service = await Service.findByPk(appointmentServiceId)

            if(!service){
                return res.status(400).json({
                    errors: ["Nenhum serviço encontrado com esse ID"]
                })
            }
        }

        const statusPermitidos = [
            'agendado',
            'confirmado',
            'cancelado',
            'concluido'
        ]


        if(req.body.status && !statusPermitidos.includes(req.body.status)){
            return res.status(400).json({
                errors: ['Por favor, digite um status válido']
            })
        }

        const appointment = await Appointment.findByPk(idBusca)

        if(!appointment){
            return res.status(400).json({
                errors: ["Nenhum agendamento localizado com o ID digitado"]
            })
        }

        if(appointment.status === 'concluido'){
            return res.status(400).json({
                errors: ['Não é possível alterar um agendamento já concluido']
            })
        }

        const usuarioLogado = await User.findByPk(req.userId)

        if(!usuarioLogado){
            return res.status(400).json({
                errors: ['Nenhum usuário localizado']
            })
        }

        if(usuarioLogado.role !== 'admin' && usuarioLogado.role !== 'barbeiro'){
            if(appointment.cliente_id !== usuarioLogado.id){
                return res.status(403).json({
                    errors: ['Você não possui permissão para alterar este agendamento']
                })
            }
        }

        const appointmentUpdate = await appointment.update(req.body)

        const { 
            id, 
            data, 
            hora, 
            status, 
            service_id: appointmentServiceId,
            cliente_id: appointmentClienteId, 
            barbeiro_id: appointmentBarbeiroId
        } = appointmentUpdate

        return res.status(200).json({ 
            id, 
            data, 
            hora, 
            status, 
            service_id: appointmentServiceId,
            cliente_id: appointmentClienteId, 
            barbeiro_id: appointmentBarbeiroId
        })
    }catch(e){
        return res.status(400).json({
            errors: ["Erro ao atualizar o agendamento, tente novamente"]
        })
    }
}

async function destroy(req, res){
    try{
        const idBusca = req.params.id

        if(!idBusca){
            return res.status(400).json({
                errors: ["Por favor, informe um ID válido"]
            })
        }

        const appointment = await Appointment.findByPk(idBusca)

        if(!appointment){
            return res.status(400).json({
                errors: ["Nenhum agendamento localizado, com o ID informado"]
            })
        }

        const {id} = appointment

        await appointment.destroy()

        return res.status(200).json(`O agendamento com ID ${id}, foi deletado com Sucesso!`)
    }catch(e){
        return res.status(400).json({
            errors: ["Falha ao deletar agendamento, tente novamente"]
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