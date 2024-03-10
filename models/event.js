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
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id',
      },
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
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: 'Description of the event',
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Start date and time of the event',
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'End date and time of the event',
    },
    timezone: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Timezone of the event',
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'game',
        key: 'id',
      },
      comment: 'Foreign key referencing the game associated with the event',
    },
    platform_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'platform',
        key: 'id',
      },
      comment: 'Identifier for the event platform',
    },
    min_player: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Maximum capacity for the event',
    },
    max_player: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Maximum capacity for the event',
    },
    organizer_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
      comment: 'Identifier for the event platform',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      comment: 'Timestamp of when the event was created',
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
      comment: 'Timestamp of when the event was last updated',
    },
  },
  {
    sequelize,
    timestamps: false, // Set to true for created_at and updated_at columns
    underscored: true,
    modelName: 'event',
    tableName: 'event', // Customize the table name if needed
    paranoid: true, // Enable soft deletes
    comment: 'Table storing information about events',
  }
);

module.exports = Event;
