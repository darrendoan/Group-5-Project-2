const sequelize = require('../config/connection');
const { Event, Game, Platform, Status, User } = require('../models');

const eventData = require('./eventData.json');
const gameData = require('./gameData.json');
const platformData = require('./platformData.json');
const statusData = require('./statusData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Status.bulkCreate(statusData, {
    individualHooks: true,
    returning: true,
  });

  await Game.bulkCreate(gameData, {
    individualHooks: true,
    returning: true,
  });

  await Platform.bulkCreate(platformData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await Event.bulkCreate(eventData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
