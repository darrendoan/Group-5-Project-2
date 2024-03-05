const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NameGame extends Model {}

NameGame.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Unique identifier for the game',
    },
    gameName: {
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'NameGame',
    tableName: 'name_games', // Customize the table name if needed
    paranoid: true, // Enable soft deletes see if this is industry standard
    comment: 'Table storing information about games',
  }
);

module.exports = NameGame;
