const dotenv = require('dotenv');
dotenv.config();

const config = {
    port: 3000,
    dbConfig: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'Aniket12@540',  
        database: process.env.DB_NAME  || 'zevra_db',
    },
};

module.exports = config;
