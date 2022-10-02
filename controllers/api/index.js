const router = require("express").Router();
const dailyFantasyPlayersRoutes = require("./dailyFantasyPlayersRoutes");

router.use("/dailyFantasyPlayers", dailyFantasyPlayersRoutes);

module.exports = router;
