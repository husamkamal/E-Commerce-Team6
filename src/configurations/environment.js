require('dotenv').config();

const { NODE_ENV, DATABASE_URL, PORT } = process.env;

const connectionString = DATABASE_URL;
let ssl = false;

switch (NODE_ENV) {
  case 'production':
    ssl = {
      rejectUnauthorized: false,
    };
    break;
  case 'development':
    break;
  case 'test':
    break;
  default:
    throw new Error('Database Connection Error');
}

const config = {
  database: {
    connectionString,
    ssl,
  },
  port: PORT || 3000,
  nodeEnv: NODE_ENV || 'development',
};

module.exports = { ...config };
