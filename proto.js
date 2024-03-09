/* eslint-disable no-undef */
/* This is a prototype script for Passwordless Auth, please do not under any circumstances use this file in any production capacity */
const express = require('express');
// Auth is required to initialise the connection to Auth0, requiresAuth is needed to add a hook to pages that require login
// We're renaming this to oidcAuth so we can substitute with our own custom middleware implementation
const { auth } = require('express-openid-connect');
const requiresAuth = require('./utils/auth.js');
const session = require('express-session'); // Maybe not needed after all?
const config = require('./config/auth.js');
const db = require('./config/connection.js');
const { User } = require('./models');

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

app.get('/', (req, res) => {
    res.json({
        isLoggedIn: req.oidc.isAuthenticated(), // oidc helper that returns a bool if logged in
        headers: req.headers,
        body: req.body
    });
});

app.get('/test', requiresAuth(), async (req, res) => {
    const userEntry = await User.findOne({ where: { id: req.oidc.user.sub } });
    const responseMsg = {
        auth0: Object.assign(req.oidc.user),
        db: userEntry ? userEntry : {}
    }
    res.json(responseMsg);
});

db.sync({alter: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});