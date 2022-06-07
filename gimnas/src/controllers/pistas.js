const pool = require('../helpers/database')

const getPistas = async (req, res, next) => {
	try {
		const sql = 'SELECT * FROM pistes'
		const rows = await pool.query(sql)
		res.status(200).json(rows)
	} catch (err){
		res.status(400).send({
			message: err.text,
			errno: err.errno,
			code: err.code
		})
	}
}

const getPistasId = async (req, res, next) => {
	try {
		const sql = `SELECT * FROM pistes WHERE id = ${req.params.id}`
		const row = await pool.query(sql)
		if (row.length > 0) {
			res.status(200).json(row)
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

module.exports = { getPistas, getPistasId }