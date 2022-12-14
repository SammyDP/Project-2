const path = require("path");
const express = require("express");
const session = require("express-session");
const handlebars = require("express-handlebars");
const routes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;
const hbs = handlebars.create({});
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// app.engine(
//   "hbs",
//   handlebars({
//     layoutsDir: `${__dirname}/views/layouts`,
//     extname: "hbs",
//     defaultLayout: "index",
//     partialsDir: `${__dirname}/views/partials`,
//   })
// );
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

//Sets a basic route
app.get("/", (req, res) => {
  console.log("hello");
  res.render("dashboard");

  //Makes the app listen to port 3000
});
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

// Fetch API data and save to database
function projectedStats(season, week) {
  // let season = "2022REG";
  // let week = 5;
  var requestUrl = `https://api.sportsdata.io/v3/nfl/projections/json/PlayerGameProjectionStatsByWeek/${season}/${week}?key=${process.env.SPORTS_DATA_API_KEY}`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      const playerId = data[0].PlayerID;
      const playerName = data[0].Name;
      const playerTeam = data[0].Team;
      const playerPosition = data[0].Position;
      const fantasyPoints = data[0].FantasyPoints;

      const playerData = {
        playerId,
        playerName,
        playerTeam,
        playerPosition,
        fantasyPoints,
      };
      console.log(playerData);
    });
}
