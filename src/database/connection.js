import sql from 'mssql';

const settings = {
  user: 'admin',
  password: 'admin123',
  server: 'localhost',
  database: 'webadmin',
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

async function getConnection() {
  try {
    const pool = await sql.connect(settings);
    return pool;
  } catch (error) {
    console.error(error);
  }
}

getConnection();
