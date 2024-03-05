const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NameLocation extends Model {}

NameLocation.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    LOCATION_NAME: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'name_location',
  }
);

module.exports = NameLocation;
