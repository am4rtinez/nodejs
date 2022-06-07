const salas = [
	{
		id: 1,
		nombre: 'Sala Fitness',
		desc: '',
	},
	{
		id: 2,
		nombre: 'Sala Cardio',
		desc: ''
	},
	{
		id: 3,
		nombre: 'Tatami',
		desc: ''
	},
	{
		id: 4,
		nombre: 'Polivalente 1',
		desc: ''
	},
	{
		id: 5,
		nombre: 'Polivalente 2',
		desc: ''
	},
	{
		id: 6,
		nombre: 'Solarium',
		desc: ''
	},
	{
		id: 7,
		nombre: 'Azotea',
		desc: ''
	},
	{
		id: 8,
		nombre: 'Spining / ciclo indoor',
		desc: ''
	},
	{
		id: 9,
		nombre: 'Padel 1',
		desc: ''
	},
	{
		id: 10,
		nombre: 'Padel 2',
		desc: ''
	},
	{
		id: 11,
		nombre: 'Tenis 1',
		desc: ''
	},
	{
		id: 12,
		nombre: 'Tenis 2',
		desc: ''
	},
	{
		id: 13,
		nombre: 'Piscina Exterior',
		desc: ''
	},
	{
		id: 14,
		nombre: 'Piscina Interior',
		desc: ''
	}
]

const getSalas = (req, res, next) => {
	res.json(salas)
}

const getSalasId = (req, res, next) => {
	const id = Number(req.params.id)
	console.log(id)
	const sala = salas.find(sala => sala.id === id)
	if (sala) {
		res.json(sala)
	} else {
		res.sendStatus(404).end()
	}
}

module.exports = { getSalas, getSalasId }