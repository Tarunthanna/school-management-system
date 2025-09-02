import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Sslr@456',
  database: 'schools_db',
  port: 3306,
};

let connection;

export async function getConnection() {
  if (!connection) {
    connection = await mysql.createConnection(dbConfig);
  }
  return connection;
}

export async function query(sql, params) {
  const connection = await getConnection();
  const [results] = await connection.execute(sql, params);
  return results;
}

export async function closeConnection() {
  if (connection) {
    await connection.end();
    connection = null;
  }
}
