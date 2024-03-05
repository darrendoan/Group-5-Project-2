/* eslint-disable no-undef */
require('dotenv').config();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH_SECRET,
    baseURL: `http://localhost:${process.env.DEV_PORT}`,
    clientID: process.env.AUTH_CLIENT,
    issuerBaseURL: process.env.AUTH_ISSUER_URL
};

module.exports = config;