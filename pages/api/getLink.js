import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "assessment_db",
  password: "1234",
  port: 5432,
});

export default async function handler(req, res) {
  try {
    const result = await pool.query('SELECT url FROM global_links LIMIT 1');
    console.log('DB result:', result.rows)

    if (result.rows.length > 0) {
      res.status(200).json({ url: result.rows[0].url });
    } else {
      res.status(404).json({ error: 'URL not found' });
    }
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
