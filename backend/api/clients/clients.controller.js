const mysql = require('../utils/mysql');

const pool = mysql.getPool();

async function get(req, res) {
  try {
    const users = await pool.query('SELECT id, username FROM users');
    res.send(users);
  } catch (err) {
    res.send({
      statusCode: 500,
      error: err
    });
  };
}

module.exports.get = get;

