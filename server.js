// Import necessary modules
const express = require('express');
const path = require('path');
const session = require('express-session');
const routes = require('./controllers'); // Import routes
const exphbs = require('express-handlebars');
//const helpers = require('./utils/helpers'); // Import helper functions
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = require('hbs');
// Create an Express application instance
const app = express();
const PORT = process.env.PORT || 3001; // Set the port for the server
//const hbs = exphbs.create({ helpers });

// Set up Handlebars as the template engine
//app.engine('handlebars', );
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views/layout'));

// Configure session middleware
const sess = {
  secret: 'your_secret_key', // Set a secret key for session encryption
  cookie: {}, // Configure session cookies if needed
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Use session middleware
app.use(session(sess));

// Middleware to parse incoming request bodies in JSON format
app.use(express.json());
// Middleware to parse URL-encoded data with extended options
app.use(express.urlencoded({ extended: true }));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Define and use routes
//app.use(routes);

app.get('/', (req, res) => {
  res.render('index');
});

// Start the server after synchronizing Sequelize models with the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
