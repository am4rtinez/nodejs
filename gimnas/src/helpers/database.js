const mariadb = require('mariadb');
const config =  require('../config/database.config')

const pool = mariadb.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
  connectionLimit: 5
});

// pool.getConnection((err, connection) => {
// 	if (err) {
// 		console.error(err)
// 		// if (err.code === 'PROTOCOL_CONNECTION_LOST') {
// 		// 	console.error('Database connection lost')
// 		// }
// 		// if (err.code === 'ER_CON_COUNT_ERROR') {
// 		// 	console.error('Database has too many connections')
// 		// }
// 		// if (err.code === 'ECONNREFUSED') {
// 		// 	console.error('Database connection was refused')
// 		// }
// 		// if (err.code === 'ER_GET_CONNECTION_TIMEOUT') {
// 		// 	console.error('Database connection timeout')
// 		// }
// 	}
// 	if (connection) connection.release()
// })

module.exports = pool