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
      comment: 'Unique identifier for the user',
    },
    fName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'First name cannot be null.',
        },
        notEmpty: {
          msg: 'First name cannot be empty.',
        },
        len: {
          args: [1, 50],
          msg: 'First name must be between 1 and 50 characters.',
        },
      },
      comment: 'First name of the user',
    },
    lName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Last name cannot be null.',
        },
        notEmpty: {
          msg: 'Last name cannot be empty.',
        },
        len: {
          args: [1, 50],
          msg: 'Last name must be between 1 and 50 characters.',
        },
      },
      comment: 'Last name of the user',
    },
    userName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Username cannot be null.',
        },
        notEmpty: {
          msg: 'Username cannot be empty.',
        },
        len: {
          args: [1, 30],
          msg: 'Username must be between 1 and 30 characters.',
        },
      },
      comment: 'Username of the user',
    },
    phoneNumber: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Phone number cannot be null.',
        },
        notEmpty: {
          msg: 'Phone number cannot be empty.',
        },
        len: {
          args: [1, 15],
          msg: 'Phone number must be between 1 and 15 characters.',
        },
      },
      comment: 'Phone number of the user',
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Email cannot be null.',
        },
        notEmpty: {
          msg: 'Email cannot be empty.',
        },
        isEmail: {
          msg: 'Invalid email format.',
        },
      },
      comment: 'Email of the user',
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      comment: 'User account activation status',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      comment: 'Timestamp of when the user account was created',
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
      comment: 'Timestamp of when the user account was last updated',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
    tableName: 'users', 
    paranoid: true, 
    comment: 'Table storing information about users',
  }
);

module.exports = User;
