const { Router } = require('express')		// Importa el metodo router de express.
const router = Router()		// Ejecutamos el router.

const reservasController = require('../controllers/reservas');

router.get('/reservas', reservasController.getReservas)

// Devuelve la sala a partir de su id.
router.get('/reservas/client/:id', reservasController.getReservasUserId)

module.exports = router