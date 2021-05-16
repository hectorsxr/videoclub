const mysql = require('../utils/mysql');

const pool = mysql.getPool();

async function login(req, res) {
    const { username, password } = req.body;
    try {
        const data = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
        for (let i = 0; i < data.length; i += 1) {
            const item = data[i];
            const [scope] = await pool.query('SELECT * FROM scopes WHERE user_id = ?', [item.id]);
            item.scope = scope?.scope;
        }

        res.send(data)
    } catch(err) {
        res.send(err)
    }
}

module.exports.login = login;

async function register(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        res.send({
            statusCode: 400,
            message: 'No username or password'
        });

        return;
    }

    try {
        const result = await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
        const { insertId } = result;
        await pool.query('INSERT INTO scopes (user_id, scope) VALUES (?, ?)', [insertId, 'user']);
        res.send({ statusCode: 200 });
    } catch(err) {
        return res.send(err);
    }
}
  
  module.exports.register = register;
  