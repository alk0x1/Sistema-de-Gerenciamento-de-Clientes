import { pool } from '../db/index.js';

export class CustomerModel {
  static async findAll() {
    const result = await pool.query('SELECT * FROM customers');
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM customers WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create({ name, email, phone, xCoordinate, yCoordinate }) {
    const result = await pool.query(
      'INSERT INTO customers (name, email, phone, x_coordinate, y_coordinate) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, xCoordinate, yCoordinate]
    );
    return result.rows[0];
  }

  static async updateById(id, { name, email, phone, xCoordinate, yCoordinate }) {
    const result = await pool.query(
      'UPDATE customers SET name = $1, email = $2, phone = $3, x_coordinate = $4, y_coordinate = $5 WHERE id = $6 RETURNING *',
      [name, email, phone, xCoordinate, yCoordinate, id]
    );
    return result.rows[0];
  }

  static async deleteById(id) {
    const result = await pool.query('DELETE FROM customers WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}
