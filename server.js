// Module Import
//  Express core
const express = require('express');
const path = require('path');
const routes = require('./controllers');

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

// Init Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Init JSON and URL encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(routes);

app.get('/test123', (req, res) => {
  res.render('test');
});
// Start the server after synchronizing Sequelize models with the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
