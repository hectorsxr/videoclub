const mysql = require('mysql');

function getPool() {
	const pool = mysql.createPool({
		host: process.env.MYSQL_HOST_IP,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
	});

	return pool;
}

module.exports.getPool = getPool;