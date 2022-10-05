const router = require("express").Router();
const { Team } = require("../../models");

// Create a new team
router.post("/", async (req, res) => {
  try {
    const newTeam = await Team.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTeam);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a team by team name
router.delete("/:id", async (req, res) => {
  try {
    const teamData = await Team.destroy({
      where: {
        id: req.params.team_name,
        user_id: req.session.user_id,
      },
    });

    if (!teamData) {
      res.status(404).json({ message: "No team found with this name!" });
      return;
    }

    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
