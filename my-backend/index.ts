const express = require('express');
const { Pool } = require('pg');
import { NextApiRequest, NextApiResponse } from 'next';

const app = express();
const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'assessment_db', 
    password: '1234', 
    port: 5432,
});

app.use(express.json());

app.post('/api/save-user', async (req: NextApiRequest, res: NextApiResponse) => {
    const { auth0_user_id, email, name, avatar_url } = req.body;
    try {
        await pool.query(
            'INSERT INTO users (auth0_user_id, email, name, avatar_url) VALUES ($1, $2, $3, $4) ON CONFLICT (auth0_user_id) DO NOTHING',
            [auth0_user_id, email, name, avatar_url]
        );
        res.status(200).send('User saved successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving user');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
