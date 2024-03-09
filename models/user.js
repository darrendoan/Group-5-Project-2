const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      comment: 'Unique identifier for the user',
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name cannot be null.',
        },
        notEmpty: {
          msg: 'Name cannot be empty.',
        },
        len: {
          args: [1, 50],
          msg: 'Name must be between 1 and 50 characters.',
        },
      },
      comment: 'First name of the user',
    },
    timezone_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'timezone',
        key: 'id',
      },
      comment: 'Timezone of the event',
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      comment: 'User account activation status',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      comment: 'Timestamp of when the user was created',
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
      comment: 'Timestamp of when the user was last updated',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    tableName: 'user', 
    paranoid: true, 
    comment: 'Table storing information about users',
  }
);

module.exports = User;
