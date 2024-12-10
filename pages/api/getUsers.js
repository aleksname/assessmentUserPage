const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'assessment_db',
    password: '1234',
    port: 5432,
});

// pool.query('SELECT name FROM users')
//     .then(result => console.log(result.rows))
//     .catch(err => console.log('err', err))
const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM user WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
getUserById()