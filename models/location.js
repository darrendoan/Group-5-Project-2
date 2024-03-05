const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NameLocation extends Model {}

NameLocation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Unique identifier for the location',
    },
    locationName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Location name cannot be null.',
        },
        notEmpty: {
          msg: 'Location name cannot be empty.',
        },
        len: {
          args: [1, 30],
          msg: 'Location name must be between 1 and 30 characters.',
        },
      },
      comment: 'Name of the location',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'NameLocation',
    tableName: 'name_locations', // Customize the table name if needed
    paranoid: true, // Enable soft deletes
    comment: 'Table storing information about locations',
  }
);

module.exports = NameLocation;
