const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      // prevents null values
      allowNull: false,
      // will only allow alphanumeric characters
      validate: {
        isAlphanumeric: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // must be longer than 8 characters
      validate: {
        len: [8],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
