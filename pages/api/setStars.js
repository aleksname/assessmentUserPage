import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'assessment_db',
  password: '1234',
  port: 5432,
});

const star = await pool.query('SELECT userstars from users WHERE id = $1', [id]);
    res.status(200).json({ userstars: star.rows[0].userStars });

const setStars = pool.query('UPDATE user SET userStars = $1 WHERE id = $2', [userStars, id]);