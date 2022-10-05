const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class PlayerStats extends Model {}

PlayerStats.init(
  {
    player_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    team: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    position: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    fantasy_points: {
      type: Datatypes.DECIMAL,
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
