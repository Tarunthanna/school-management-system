import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  port: process.env.DB_PORT || 3306,
};

async function setupDatabase() {
  try {
    // Create connection without database
    const connection = await mysql.createConnection(dbConfig);
    
    // Create database if it doesn't exist
    await connection.execute('CREATE DATABASE IF NOT EXISTS schools_db');
    console.log('Database created or already exists');
    
    // Use the database
    await connection.execute('USE schools_db');
    
    // Create schools table
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name TEXT NOT NULL,
        address TEXT NOT NULL,
        city TEXT NOT NULL,
        state TEXT NOT NULL,
        contact VARCHAR(15) NOT NULL,
        image TEXT,
        email_id VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    await connection.execute(createTableSQL);
    console.log('Schools table created or already exists');
    
    await connection.end();
    console.log('Database setup completed successfully!');
    
  } catch (error) {
    console.error('Error setting up database:', error);
  }
}

// Run setup if this file is executed directly
if (require.main === module) {
  setupDatabase();
}

export default setupDatabase;
