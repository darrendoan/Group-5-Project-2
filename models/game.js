const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Unique identifier for the game',
    },
    game_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Game name cannot be null.',
        },
        notEmpty: {
          msg: 'Game name cannot be empty.',
        },
        len: {
          args: [1, 30],
          msg: 'Game name must be between 1 and 30 characters.',
        },
      },
      comment: 'Name of the game',
    },
    min_player: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Maximum capacity for this game',
    },
    max_player: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Maximum capacity for this game',
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'game',
    tableName: 'game', // Customize the table name if needed
    paranoid: true, // Enable soft deletes see if this is industry standard
    comment: 'Table storing information about games',
  }
);

module.exports = Game;
