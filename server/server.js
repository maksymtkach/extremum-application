// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to handle JSON requests and allow cross-origin requests
app.use(bodyParser.json());
app.use(cors({
    origin: '*', // Allow all origins for development (adjust as needed in production)
}));

// Create a PostgreSQL pool to connect to the database using environment variables
const pool = new Pool({
  user: process.env.DB_USER,        // Load from .env
  host: process.env.DB_HOST,        // Load from .env
  database: process.env.DB_NAME,    // Load from .env
  password: process.env.DB_PASSWORD, // Load from .env
  port: process.env.DB_PORT,        // Load from .env
});

// Route to get all posts
app.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching data', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.post('/data', async (req, res) => {
    const { title } = req.body;
    console.log('Received title:', title);  // Log received data
    
    if (title) {
      try {
        const result = await pool.query(
          'INSERT INTO posts (title) VALUES ($1) RETURNING *',
          [title]
        );
        console.log('Inserted row:', result.rows[0]);  // Log inserted data
        res.status(201).json(result.rows[0]);
      } catch (err) {
        console.error('Error inserting data', err);
        res.status(500).json({ error: 'Failed to insert data' });
      }
    } else {
      res.status(400).json({ error: 'Title is required' });
    }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
