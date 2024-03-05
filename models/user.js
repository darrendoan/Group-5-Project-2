const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    FName: {
      type: DataTypes.STRING(50), // Adjusted to match VARCHAR(50)
      allowNull: false,
    },
    LName: {
      type: DataTypes.STRING(50), // Adjusted to match VARCHAR(50)
      allowNull: false,
    },
    UserName: {
      type: DataTypes.STRING(30), // Adjusted to match VARCHAR(30)
      allowNull: false,
    },
    PhoneNumber: {
      type: DataTypes.STRING(15), // Adjusted to match VARCHAR(15)
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100), // Adjusted to match VARCHAR(100)
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // Adjusted to match boolean default value
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Adjusted to match CURRENT_TIMESTAMP
    },
    modified_at: {
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
    modelName: 'user', // Adjusted to match the model name 'user'
  }
);

module.exports = User;
