/* eslint-disable no-undef */
/* This is a prototype script for Passwordless Auth, please do not under any circumstances use this file in any production capacity */
const express = require('express');
// Auth is required to initialise the connection to Auth0, requiresAuth is needed to add a hook to pages that require login
const { auth, requiresAuth } = require('express-openid-connect');
const session = require('express-session');
const config = require('./config/auth.js');
const User = require('./models/user.js');

const PORT = process.env.DEV_PORT;
const app = express();

// Initialise Auth0 integration and load config
// Automatically establishes endpoints for /login /logout /callback (which passes on requests to Auth0)
app.use(auth(config));
app.use(session({
    secret: process.env.AUTH_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function checkUser(req, res, next) {
    if (req.oidc.isAuthenticated()) {
        await User.findOrCreate({
            id: req.oidc.user.sub,
            userName: req.oidc.user.nickname,
            email: req.oidc.user.email
        },
        {
            id: req.oidc.user.sub
        });
    }

    next();
}

app.get('/', (req, res) => {
    res.json({
        isLoggedIn: req.oidc.isAuthenticated(), // oidc helper that returns a bool if logged in
        headers: req.headers,
        body: req.body
    });
});

app.get('/test', requiresAuth(), checkUser, (req, res) => {
    res.json(req.oidc.user); // oidc.user contains the profile data fetched from an authenticated account
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});