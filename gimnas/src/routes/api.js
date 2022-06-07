const { Router } = require('express')		// Importa el metodo router de express.
const router = Router()		// Ejecutamos el router.

router.get('/', (req, res) => {
	res.send('<h1>API REST Gimnas</h1>')
})

const clientsRoute = require('./clients')
const pistasRoute = require('./pistas')
const reservasRoute = require('./reservas')

router.use(clientsRoute)
router.use(pistasRoute)
router.use(reservasRoute)

module.exports = router