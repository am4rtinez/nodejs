const express = require('express')
const morgan = require('morgan')
// const requestLogger = require('./middlewares/requestLogger')
const app = express()
const PORT = 3000

const routes = require('./routes/index')
const apiRoutes = require('./routes/api')
// const clientsRoute = require('./routes/clients')

const unknownEndpoint = (req, res) => {
	res.status(404).send({ error: 'unknown endpoint' })
}

// Settings
app.set('port', process.env.PORT || PORT)

//Middlewares
app.use(express.json())
app.use(morgan('dev'))
// app.use(requestLogger)

// Routes
app.use('/', routes)					// Rutas del site apuntaran a las vistas.
app.use('/api', apiRoutes)		// Rutas de la api

app.use(unknownEndpoint)

// Server initialization
app.listen(app.set('port'), () => {
	console.log(`Servidor ejecutandose en http://localhost:${app.set('port')}`)
})