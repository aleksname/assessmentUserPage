import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'assessment_db',
    password: '1234',
    port: 5432,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const id = parseInt(req.query.id);

    try {
      const result = await pool.query('SELECT name FROM users WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'User not found.' });
      }
      res.status(200).json({ name: result.rows[0].name });

      res.status(200).json({ userstars: star.rows[0].userStars });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
}