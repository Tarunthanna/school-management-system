import mysql from 'mysql2/promise';

const dbConfig = {
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || 'Sslr@456',
	database: process.env.DB_NAME || 'schools_db',
	port: Number(process.env.DB_PORT) || 3306,
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
