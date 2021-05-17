const mysql = require('../utils/mysql');

const pool = mysql.getPool();

async function get(req, res) {
  const { rented } = req.query;
  try {
    let sqlQuery = ''
    if (rented === 'false') {
      sqlQuery = 'SELECT * FROM movies WHERE rented = 0';
    } else {
      sqlQuery = 'SELECT * FROM movies';
    }

    const movies = await pool.query(sqlQuery);
    res.send(movies);
  } catch (err) {
    res.send({
      statusCode: 500,
      error: err
    });
  };
}

module.exports.get = get;

async function getRented(req, res) {
  const { id } = req.params;
  if(!id) res.send([]);

  try {
    let [userScope] = await pool.query('SELECT * FROM scopes WHERE user_id = ?', [id]);
    userScope = JSON.parse(JSON.stringify(userScope));
    let moviesRented = [];
    if (userScope.scope === 'admin') {
      moviesRented = await pool.query('SELECT * FROM movies WHERE rented = 1');
    } else {
      moviesRented = await pool.query('SELECT * FROM movies WHERE rented = 1 AND userId = ?', [id]);
      console.log(moviesRented)
    }

    res.send(moviesRented);
  } catch (err) {
    console.log(err)
    res.send({
      statusCode: 500,
      error: err
    });
  };
}

module.exports.getRented = getRented;

async function rent(req, res) {
  const { id, clientId } = req.body;
  if (!id || !clientId) res.send({})

  try {
    await pool.query('UPDATE movies SET rented = 1, userId = ? WHERE id = ? AND rented = 0', [clientId, id]);
    res.send({ statusCode: 200 });
  } catch (err) {
    res.send({
      statusCode: 500,
      error: err
    });
  };
}

module.exports.rent = rent;

async function returnMovie(req, res) {
  const { id, clientId } = req.body;
  if (!id || !clientId) res.send({})

  try {
    await pool.query('UPDATE movies SET rented = 0, userId = null WHERE id = ? AND userId = ? AND rented = 1', [id, clientId]);
    res.send({ statusCode: 200 });
  } catch (err) {
    res.send({
      statusCode: 500,
      error: err
    });
  };
}

module.exports.returnMovie = returnMovie;
