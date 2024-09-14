
import { Client } from 'pg';

const client = new Client({
  user: 'postgres', 
  host: 'localhost',
  database: 'assessment_db', 
  password: '1234', 
  port: 5432,
});

async function fetchUsers() {
  try {
    await client.connect();
    console.log('Connected to the database');

    console.log('Executing query...');
    const res = await client.query('SELECT * FROM users');
    console.log('Users:', res.rows);

  } catch (err) {
    if (err instanceof Error) {
      console.error('Error executing query', err.stack);
    } else {
      console.error('Unknown error', err);
    }
  } finally {
    await client.end();
    console.log('Client disconnected');
  }
}


// Виклик функції для перевірки
fetchUsers();
