import { Pool } from 'pg';
import bcrypt from 'bcrypt'; 

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'assessment_db', 
    password: '1234', 
    port: 5432,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    console.log('Received email:', email);
    console.log('Received password:', password);

    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

      console.log('Query result:', result.rows);

      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'User not found.' });
      }

      const user = result.rows[0];
      console.log('Retrieved user:', user);

      if (user.password !== password) {
        console.log('Password does not match');
        return res.status(401).json({ message: 'Invalid credentials.' });
      }

      res.status(200).json({ message: 'Login successful', user: { id: user.id, name: user.name } });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
}





