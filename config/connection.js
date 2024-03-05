const Sequlize = require('sequelize');

require('dotenv').config();

const Sequlize = new Sequlize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
)

