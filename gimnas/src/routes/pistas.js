const { Router } = require('express')		// Importa el metodo router de express.
const router = Router()		// Ejecutamos el router.

const pistasController = require('../controllers/pistas');

router.get('/pistas', pistasController.getPistas)

// Devuelve la sala a partir de su id.
router.get('/pistas/:id', pistasController.getPistasId)

module.exports = router