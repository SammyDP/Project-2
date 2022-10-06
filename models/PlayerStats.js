const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PlayerStats extends Model {}

PlayerStats.init(
  {
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fantasy_points: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "playerStats",
  }
);

module.exports = PlayerStats;
