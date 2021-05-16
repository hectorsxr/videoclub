const mysql = require('../utils/mysql');

const pool = mysql.getPool();

function getData(req, res) {
  const { table } = req.query;
  pool.query(`select * from ${table}`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
}

module.exports.getData = getData;
