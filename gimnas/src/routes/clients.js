const { Router } = require('express')		// Importa el metodo router de express.
const router = Router()		// Ejecutamos el router.

const clientsController = require('../controllers/clients');

// Devuelve la lista de clientes.
router.get('/clients', clientsController.getClients)

// Devuelve el cliente a partir de su id.
router.get('/clients/:id', clientsController.getClientId)

module.exports = router