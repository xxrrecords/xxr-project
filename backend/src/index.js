import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const { Pool } = pkg;
const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware before routes
app.use(cors());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Backend is connected! DB time is: ${result.rows[0].now}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Database connection error');
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
