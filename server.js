// Module Import
//  Express core
const express = require('express');
const path = require('path');
//  Auth0 integration
const { auth } = require('express-openid-connect');
const authConfig = require('./config/auth');
//  View
const exphbs = require('express-handlebars');
//  Model
const sequelize = require('./config/connection');

// Environment definition
const app = express();
const PORT = process.env.PORT || 3001; // Set the port for the server
const hbs = exphbs.create({});

// Init Auth0
app.use(auth(authConfig));
app.set('trust proxy', true);

// Init Static Asset Loading
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views/layout')); // What is this for?

// Init Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Init JSON and URL encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import controller routes
app.use(require('./controllers/index'));

// Error Handling Middleware - Do we still need this?
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server after synchronizing Sequelize models with the database
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
