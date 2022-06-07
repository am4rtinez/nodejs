const clients = [
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

const getClients = (req, res, next) => {
	res.json(clients)
}

const getClientId = (req, res, next) => {
	const id = Number(req.params.id)
	console.log(id)
	const client = clients.find(client => client.id === id)
	if (client) {
		res.json(client)
	} else {
		res.sendStatus(404).end()
	}
}

module.exports = { getClients, getClientId }