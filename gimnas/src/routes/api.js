const { Router } = require('express')		// Importa el metodo router de express.
const router = Router()		// Ejecutamos el router.

router.get('/', (req, res) => {
	res.send('<h1>API REST Gimnas</h1>')
})

const clientsRoute = require('./clients')
const salasRoute = require('./salas')

router.use(clientsRoute)
router.use(salasRoute)

module.exports = router