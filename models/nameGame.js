const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Unique identifier for the event',
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: 'Status of the event',
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Event title cannot be null.',
        },
        notEmpty: {
          msg: 'Event title cannot be empty.',
        },
        len: {
          args: [1, 30],
          msg: 'Event title must be between 1 and 30 characters.',
        },
      },
      comment: 'Title of the event',
    },
    descriptionEvent: {
      type: DataTypes.STRING(255),
      comment: 'Description of the event',
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'Start date and time of the event',
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'End date and time of the event',
    },
    locationId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'NameLocation',
        key: 'id',
      },
      comment: 'Foreign key referencing the location of the event',
    },
    timezone: {
      type: DataTypes.STRING(30),
      comment: 'Timezone of the event',
    },
    gameId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'NameGame',
        key: 'id',
      },
      comment: 'Foreign key referencing the game associated with the event',
    },
    platformId: {
      type: DataTypes.INTEGER,
      comment: 'Identifier for the event platform',
    },
    maxCapacity: {
      type: DataTypes.INTEGER,
      comment: 'Maximum capacity for the event',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      comment: 'Timestamp of when the event was created',
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
      comment: 'Timestamp of when the event was last updated',
    },
  },
  {
    sequelize,
    timestamps: true, // Set to true for createdAt and updatedAt columns
    underscored: true,
    modelName: 'Event',
    tableName: 'events', // Customize the table name if needed
    paranoid: true, // Enable soft deletes
    comment: 'Table storing information about events',
  }
);

module.exports = Event;
