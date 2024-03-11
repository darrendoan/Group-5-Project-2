/* eslint-disable no-undef */
require('dotenv').config();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH_SECRET,
    baseURL: process.env.AUTH_BASEURL,
    clientID: process.env.AUTH_CLIENT,
    issuerBaseURL: process.env.AUTH_ISSUER_URL
};

module.exports = config;