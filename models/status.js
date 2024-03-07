const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Status extends Model {}

Status.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Unique identifier for the status',
    },
    status_name: {
      type: DataTypes.STRING(30),
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
      comment: 'Name of the status',
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
    modelName: 'status',
    tableName: 'status', // Customize the table name if needed
    paranoid: true, // Enable soft deletes see if this is industry standard
    comment: 'Table storing information about status',
  }
);

module.exports = Status;
