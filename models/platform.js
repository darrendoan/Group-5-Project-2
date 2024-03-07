const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Platform extends Model {}

Platform.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Unique identifier for the platform',
    },
    platform_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Plaftform name cannot be null.',
        },
        notEmpty: {
          msg: 'Plaftform name cannot be empty.',
        },
        len: {
          args: [1, 30],
          msg: 'Plaftform name must be between 1 and 30 characters.',
        },
      },
      comment: 'Name of the platform',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      comment: 'Timestamp of when the platform was created',
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
      comment: 'Timestamp of when the platform was last updated',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'platform',
    tableName: 'platform', // Customize the table name if needed
    paranoid: true, // Enable soft deletes see if this is industry standard
    comment: 'Table storing information about games',
  }
);

module.exports = Platform;
