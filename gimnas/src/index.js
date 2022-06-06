const express = require('express')
const app = express()
const PORT = 3000

// Settings
app.set('port', process.env.PORT || PORT)

//Middlewares
app.use(express.json())

// Routes
app.use(require('./routes/index'))

// Server initialization
app.listen(app.set('port'), () => {
	console.log(`Servidor ejecutandose en http://localhost:${app.set('port')}`)
})