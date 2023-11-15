const ClientService = require('../services/clients.services');
const Utils = require('../utils/Utils');
const Representative = require('../models/representative.model');
const transporter = require('../utils/mailer');

const getAllClients = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await ClientService.getAll(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getClient = async (req, res) => {
    try {
        const client_id = req.params.client_id;
        const result = await ClientService.getClientById(client_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createClient = async (req, res) => {
    try {
        const client = req.body;
        const result = await ClientService.createClient(client);
        res.status(201).json({ message: 'resource created successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const createClientForUser = async (req, res) => {
    try {
        const client = req.body;
        const result = await ClientService.createClientForUser(client);
        if (result.dataValues.representativeId) {
          const representante_id = result.dataValues.representativeId;
          const representante = await ClientService.getRepresentante(representante_id);
          res.status(201).json({ message: 'resource created successfully' });
          const userRegistrationEmail = {
            from: 'sistema.micolacion@gmail.com',
            to: representante.dataValues.email,
            cc: 'micolacion.cv@gmail.com',
            subject: 'Email confirmation',
            html: `<h1>Su registro ha sido recibido</h1>
                   <p>Estimado/a ${representante.dataValues.names},</p>
                   <p>su aceptación a las políticas de seguridad ha sido registrada.</p>
                   <p>Mi Colación agradece el tiempo tomado en completar el formulario.</p>
                   <h3>Atentamente</h3>
                   <h3>Mi Colación</h3>`,
          };

          transporter.sendMail(userRegistrationEmail, (error, info) => {
            if (error) {
              console.error('Error al enviar el correo electrónico:', error);
            } else {
              console.log('Correo electrónico de notificación enviado:', info.response);
            }
          });
        } else {
          res.status(400).json({ message: 'something wrong' });
        }
      } catch (error) {
        res.status(400).json(error.message);
      }
      
}

const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const client = req.body;
        const result = await ClientService.updateClient(client, { where: {id} });
        if(result){
            const representante = await ClientService.updateRepresentative(client, { where: { id: client.representativeId }});
            if (representante){
                res.status(200).json({message: 'resource updated successfully'});
            } else {
                res.status(400).json({message: 'error al actualizar representante'});
            }
        }       
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ClientService.delete({
            where: { id }
        });
        res.status(200).json({ message: 'resource deleted successfully' })
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllClients,
    getClient,
    createClient,
    createClientForUser,
    updateClient,
    deleteClient,
}