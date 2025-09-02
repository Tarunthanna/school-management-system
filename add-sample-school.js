const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Sslr@456',
  database: 'schools_db',
  port: 3306,
};

async function addSampleSchool() {
  let connection;
  
  try {
    console.log('Connecting to database...');
    connection = await mysql.createConnection(dbConfig);
    console.log('✓ Connected to schools_db database');
    
    // Sample school data
    const sampleSchool = {
      name: 'Sample High School',
      address: '123 Education Street, Learning District',
      city: 'Sample City',
      state: 'Sample State',
      contact: '1234567890',
      email_id: 'info@samplehighschool.edu',
      image: null // No image for now
    };
    
    console.log('Adding sample school...');
    const [result] = await connection.execute(
      'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [sampleSchool.name, sampleSchool.address, sampleSchool.city, sampleSchool.state, sampleSchool.contact, sampleSchool.image, sampleSchool.email_id]
    );
    
    console.log('✓ Sample school added successfully!');
    console.log(`School ID: ${result.insertId}`);
    console.log('\nYou can now:');
    console.log('1. View the school at: http://localhost:3000/showSchools');
    console.log('2. Add more schools with photos at: http://localhost:3000/addSchool');
    
  } catch (error) {
    console.error('❌ Error adding sample school:', error.message);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Run the function
addSampleSchool();
