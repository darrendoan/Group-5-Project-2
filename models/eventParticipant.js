const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class EventParticipant extends Model {}

EventParticipant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Unique identifier for the event',
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'event',
        key: 'id',
      },
      comment: 'Identifier for the event-participant',
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
      comment: 'Identifier for the event-participant',
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: 'Participant confirmed',
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
    timestamps: false, // Set to true for createdAt and updatedAt columns
    underscored: true,
    modelName: 'eventParticipant',
    tableName: 'eventParticipant', // Customize the table name if needed
    paranoid: true, // Enable soft deletes
    comment: 'Table storing information about events',
  }
);

module.exports = EventParticipant;
