const { Router } = require('express')		// Importa el metodo router de express.
const router = Router()		// Ejecutamos el router.

// Generacion de las rutas.
router.get('/', (req, res) => {
	res.send('<h1>Gimnas NODE JS</h1>')
})

module.exports = router