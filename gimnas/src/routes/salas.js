const { Router } = require('express')		// Importa el metodo router de express.
const router = Router()		// Ejecutamos el router.

const salasController = require('../controllers/salas');

router.get('/salas', salasController.getSalas)

// Devuelve la sala a partir de su id.
router.get('/salas/:id', salasController.getSalasId)

module.exports = router