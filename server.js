const path = require("path");
const express = require("express");
const session = require("express-session");
const handlebars = require("express-handlebars");
const routes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

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

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: "hbs",
    defaultLayout: "index",
    partialsDir: `${__dirname}/views/partials`,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

//Sets a basic route
app.get("/", (req, res) => {
  res.render("main", { layout: "index" });

  //Makes the app listen to port 3000
});
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
