const pool = require('../helpers/database')

const getClients = async (req, res, next) => {
	try {
		const sql = 'SELECT * FROM clients'
		const result = await pool.query(sql)
		res.status(200).json(result)
	} catch (err){
		// console.error(err)
		res.status(400).send({
			message: err.text,
			errno: err.errno,
			code: err.code
		})
	}
}

const getClientId = async (req, res, next) => {
	try {
		const sql = `SELECT * FROM clients WHERE id = ${req.params.id}`
		const result = await pool.query(sql)
		if (result.length > 0) {
			res.status(200).json(result)
		} else {
			res.status(400).send({ message : 'No Data Found' }).end()
		}
	} catch (err){
		res.status(400).send({
			message: err.text,
			errno: err.errno,
			code: err.code
		})
	}
}

module.exports = { getClients, getClientId }