import { Pool } from 'pg'

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "assessment_db",
  password: "1234",
  port: 5432,
});

export default async function handler(req, res) {
  const result = await pool.query(
    'SELECT SUM(attention_score) AS total FROM grades WHERE user_id = 1'
  );
  res.status(200).json(result.rows[0].total);
}

