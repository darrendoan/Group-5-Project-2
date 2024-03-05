const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    STATUS: {
      type: DataTypes.TINYINT,
      allowNull: true, // Adjusted to match NULL in TINYINT
    },
    TITLE: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    DESCRIPTION_EVENT: {
      type: DataTypes.STRING(255),
    },
    START_DATE: {
      type: DataTypes.DATE,
      allowNull: true, // Adjusted to match NULL in DATE
    },
    END_DATE: {
      type: DataTypes.DATE,
      allowNull: true, // Adjusted to match NULL in DATE
    },
    LOCATION_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'name_location',
        key: 'ID',
      },
    },
    TIMEZONE: {
      type: DataTypes.STRING(30),
    },
    GAME_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'name_game',
        key: 'ID',
      },
    },
    PLATFORM_ID: {
      type: DataTypes.INTEGER,
    },
    MAX: {
      type: DataTypes.INTEGER,
    },
    CREATED_AT: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Adjusted to match CURRENT_TIMESTAMP
    },
    MODIFIED_AT: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Adjusted to match CURRENT_TIMESTAMP
      onUpdate: DataTypes.NOW, // Added to match ON UPDATE CURRENT_TIMESTAMP
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;
