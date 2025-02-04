const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'assessment_db',
    password: '1234',
    port: 5432,
});

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT name FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows[0].name);
  });
};

module.exports = getUserById;