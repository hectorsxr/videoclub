const mysql = require('mysql');
const { promisify } = require('util');

function getPool() {
	const pool = mysql.createPool({
		host: process.env.MYSQL_HOST_IP,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
	});

	pool.getConnection((err, connection) => {
		if (err) {
			if (err.code === 'PROTOCOL_CONNECTION_LOST') {
				console.error('DATABASE CONNECTION LOST');
			}

			if (err.code === 'ER_CON_COUNT_ERROR') {
				console.error('DATABASE HAS TO MANY CONECTIONS');
			}

			if (err.code === 'ECONNREFUSED') {
				console.error('DATABASE CONNECTION REFUSED');
			}
		}

		if (connection) connection.release();
		console.log('DB is connected');
		return;
	})

	pool.query = promisify(pool.query);

	return pool;
}

module.exports.getPool = getPool;
