const dotenv = require('dotenv');
dotenv.config();  // This will automatically look for a .env file in the root

const config = {
    port: 3000,  // Default to 3000 if PORT is not set
    dbConfig: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'Aniket12@540',  // Default to empty string if DB_PASSWORD is not set
        database: process.env.DB_NAME  || 'zevra_db',
    },
};

module.exports = config;
