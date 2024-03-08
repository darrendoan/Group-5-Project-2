const Event = require('./Event');
const Status = require('./Status');
const Timezone = require('./Timezone');
const Game = require('./Game');
const Platform = require('./Platform');
const User = require('./User');
const EventParticipant = require('./eventParticipant');

/*  Relation Event - Status*/
Event.hasMany(Status, {
  foreignKey: 'status_id',
  onDelete: 'CASCADE'
});

Status.belongsTo(Event, {
  foreignKey: 'status_id'
});

/*  Relation Event - Timezone*/
Event.hasMany(Timezone, {
  foreignKey: 'timezone_id',
  onDelete: 'CASCADE'
});

Timezone.belongsTo(Event, {
  foreignKey: 'timezone_id'
});

/*  Relation Event - Game*/
Event.hasMany(Game, {
  foreignKey: 'game_id',
  onDelete: 'CASCADE'
});

Game.belongsTo(Event, {
  foreignKey: 'game_id'
});

/*  Relation Event - Platform*/
Event.hasMany(Platform, {
  foreignKey: 'platform_id',
  onDelete: 'CASCADE'
});

Platform.belongsTo(Event, {
  foreignKey: 'platform_id'
});

/*  Relation Event - User*/
// Event belongToMany User (through EventParticipant)
Event.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: EventParticipant,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'event_users'
});

// User belongToMany Event (through EventParticipant)
User.belongsToMany(Event, {
  // Define the third table needed to store the foreign keys
  through: {
    model: EventParticipant,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'user_events'
});

module.exports = { Event, Status, Timezone, Game, Platform, User, EventParticipant };
