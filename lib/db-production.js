import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'schools_db',
  port: process.env.DB_PORT || 3306,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

let connection;

export async function getConnection() {
  if (!connection) {
    try {
      connection = await mysql.createConnection(dbConfig);
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  }
  return connection;
}

export async function query(sql, params) {
  try {
    const connection = await getConnection();
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export async function closeConnection() {
  if (connection) {
    await connection.end();
    connection = null;
  }
}

// Test connection function
export async function testConnection() {
  try {
    const connection = await getConnection();
    await connection.ping();
    console.log('Database connection test successful');
    return true;
  } catch (error) {
    console.error('Database connection test failed:', error);
    return false;
  }
}
