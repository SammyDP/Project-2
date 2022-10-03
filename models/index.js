const User = require("./User");
const Team = require("./Team");

User.hasMany(Project, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Team.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Team };
