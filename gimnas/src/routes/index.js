const { Router } = require('express')		// Importa el metodo router de express.
const router = Router()		// Ejecutamos el router.

const users = [
	{
		id: 1,
		nombre: 'Andres',
		apellidos: 'Calamardo',
		email: 'acalamardo@example.com'
	},
	{
		id: 2,
		nombre: 'Pepe',
		apellidos: 'Fenicio',
		email: 'pfenicio@example.com'
	},
	{
		id: 3,
		nombre: 'Luisa',
		apellidos: 'Palomino',
		email: 'lpalomino@example.com'
	},
	{
		id: 4,
		nombre: 'Susana',
		apellidos: 'Macaroni',
		email: 'smacaroni@example.com'
	},
]

// Generacion de las rutas.
router.get('/', (req, res) => {
	res.send('<h1>API REST Gimnas</h1>')
})

router.get('/api', (req, res) => {
	res.json({'Title': 'Hola Mundo'})
})

// Devuelve la lista de clientes.
router.get('/api/clients', (req, res) => {
	res.json(users)
})

// Devuelve el cliente a partir de su id.
router.get('/api/clients/:id', (req, res) => {
	const id = Number(req.params.id)
	console.log(id)
	const user = users.find(user => user.id === id)
	if (user) {
		res.json(user)
	}
})

module.exports = router