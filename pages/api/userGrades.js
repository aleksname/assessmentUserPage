// pages/api/userGrades.js

import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'assessment_db',
  password: '1234',
  port: 5432,
});

export default async function handler(req, res) {
  try {
    const user_id = 1;
    
    const result = await pool.query('SELECT attention_score, activity_score, kahoot_score FROM grades WHERE user_id = $1', [user_id]);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching grades:', err);
    res.status(500).json({ error: 'Database error' });
  }
}
