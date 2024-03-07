const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Timezone extends Model {}

Timezone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Unique identifier for the timezone',
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Status name cannot be null.',
        },
        notEmpty: {
          msg: 'Status cannot be empty.',
        },
        len: {
          args: [1, 30],
          msg: 'Status must be between 1 and 30 characters.',
        },
      },
      comment: 'Name of the timezone',
    },
    offset: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      comment: 'Offset for the timezone',
    },
    abbreviation: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Status name cannot be null.',
        },
        notEmpty: {
          msg: 'Status cannot be empty.',
        },
        len: {
          args: [1, 10],
          msg: 'Status must be between 1 and 10 characters.',
        },
      },
      comment: 'Name of the abbreviation',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      comment: 'Timestamp of when the status was created',
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
      comment: 'Timestamp of when the status was last updated',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'timezone',
    tableName: 'timezone', // Customize the table name if needed
    paranoid: true, // Enable soft deletes see if this is industry standard
    comment: 'Table storing information about timezone',
  }
);

module.exports = Timezone;
