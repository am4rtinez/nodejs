const { Router } = require('express')		// Importa el metodo router de express.
const router = Router()		// Ejecutamos el router.

router.get('/', (req, res) => {
	res.render('api.pug', { title: 'API REST Gimnas', message: 'Hello there!', name: 'api' });
})

const clientsRoute = require('./clients')
const pistasRoute = require('./pistas')
const reservasRoute = require('./reservas')

router.use(clientsRoute)
router.use(pistasRoute)
router.use(reservasRoute)

module.exports = router