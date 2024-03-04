/* eslint-disable no-undef */

/* This is a prototype script for Passwordless Auth, please do not under any circumstances use this file in any production capacity */
const express = require('express');
// Auth is required to initialise the connection to Auth0, requiresAuth is needed to add a hook to pages that require login
const { auth, requiresAuth } = require('express-openid-connect');
const config = require('./config/auth');

const PORT = 3001;
const app = express();

// Initialise Auth0 integration and load config
// Automatically establishes endpoints for /login /logout /callback (which passes on requests to Auth0)
app.use(auth(config));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        isLoggedIn: req.oidc.isAuthenticated(), // oidc helper that returns a bool if logged in
        headers: req.headers,
        body: req.body
    });
});

app.get('/test', requiresAuth(), (req, res) => {
    res.json(req.oidc.user); // oidc.user contains the profile data fetched from an authenticated account
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});