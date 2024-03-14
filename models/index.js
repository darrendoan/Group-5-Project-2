const Event = require('./event');
const Status = require('./status');
const Game = require('./game');
const Platform = require('./platform');
const User = require('./user');
const EventParticipant = require('./eventParticipant');

/*  Relation Event - Status*/
Event.belongsTo(Status, {
  foreignKey: 'status_id',
  onDelete: 'CASCADE'
});

Status.hasMany(Event, {
  foreignKey: 'status_id'
});

/*  Relation Event - Game*/
Event.belongsTo(Game, {
  foreignKey: 'game_id',
  onDelete: 'CASCADE'
});

Game.hasMany(Event, {
  foreignKey: 'game_id'
});

/*  Relation Event - Platform*/
Event.belongsTo(Platform, {
  foreignKey: 'platform_id',
  onDelete: 'CASCADE'
});

Platform.hasMany(Event, {
  foreignKey: 'platform_id'
});

Event.belongsTo(User, {
  foreignKey: 'organizer_id',
  as: 'organiser'
});

User.hasMany(Event, {
  foreignKey: 'organizer_id',
  as: 'organiser_for'
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
  as: 'events'
});

// User belongToMany Event (through EventParticipant)
User.belongsToMany(Event, {
  // Define the third table needed to store the foreign keys
  through: {
    model: EventParticipant,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'participants'
});

module.exports = { Event, Status, Game, Platform, User, EventParticipant };
