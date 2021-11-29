import sql from 'mssql';
import config from '../config';

const settings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbName,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(settings);
    return pool;
  } catch (error) {
    console.error(error);
  }
}

export {sql};

