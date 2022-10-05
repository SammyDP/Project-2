const User = require("./User");
const Team = require("./Team");
const PlayerStats = require("./PlayerStats");

User.hasMany(Team, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Team.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Team, PlayerStats };
