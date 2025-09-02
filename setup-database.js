const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Sslr@456',
  port: 3306,
};

async function setupDatabase() {
  let connection;
  
  try {
    console.log('Connecting to MySQL server...');
    console.log(`Host: ${dbConfig.host}:${dbConfig.port}`);
    console.log(`User: ${dbConfig.user}`);
    
    // Create connection without database
    connection = await mysql.createConnection(dbConfig);
    console.log('✓ Successfully connected to MySQL server');
    
    // Create database if it doesn't exist
    console.log('Creating database...');
    await connection.execute('CREATE DATABASE IF NOT EXISTS schools_db');
    console.log('✓ Database created or already exists');
    
    // Close connection and reconnect with database
    await connection.end();
    
    // Create new connection with database
    const dbConfigWithDB = {
      ...dbConfig,
      database: 'schools_db'
    };
    
    connection = await mysql.createConnection(dbConfigWithDB);
    console.log('✓ Connected to schools_db database');
    
    // Create schools table
    console.log('Creating schools table...');
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
    console.log('✓ Schools table created or already exists');
    
    console.log('\n🎉 Database setup completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Run: npm run dev');
    console.log('2. Open http://localhost:3000 in your browser');
    
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    console.log('\nTroubleshooting tips:');
    console.log('- Make sure MySQL server is running');
    console.log('- Check your database credentials');
    console.log('- Ensure you have permission to create databases');
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Run setup
setupDatabase();
