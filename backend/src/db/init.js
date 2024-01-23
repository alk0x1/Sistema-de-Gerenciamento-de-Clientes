import { pool } from './index.js';

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(50),
    x_coordinate INT,
    y_coordinate INT
  );
`;

export async function initializeTable() {
  try {
    await pool.query(createTableQuery);
    console.log("Checked and initialized 'customers' table if necessary.");
  } catch (error) {
    console.error('Error initializing table:', error);
  }
}

