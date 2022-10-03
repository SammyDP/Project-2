const router = require("express").Router();
const teamRoutes = require("./teamRoutes");
const userRoutes = require("./userRoutes");

router.use("/teams", teamRoutes);
router.use("/users", userRoutes);

module.exports = router;
