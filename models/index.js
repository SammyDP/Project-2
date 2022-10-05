const User = require("./User");
const Team = require("./Team");
const NewUser = require("./NewUser");
const PlayerStats = require("./PlayerStats");

NewUser.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Team, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Team.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Team, NewUser, PlayerStats };
