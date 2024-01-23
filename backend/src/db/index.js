import pkg from 'pg';
const { Pool } = pkg;

import { config } from 'dotenv';
config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
