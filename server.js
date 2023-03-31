// app.use static (to bring in product images)
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const seed = require("./seeds/seed");

const main = async () => {
  await seed();
  const SequelizeStore = require("connect-session-sequelize")(session.Store);

  const app = express();
  // herokuapp url
  const PORT = process.env.PORT || 3001;

  // Set up Handlebars.js engine with custom helpers
  const hbs = exphbs.create();

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

  // Add a static middleware for serving assets in the public folder
  app.use(express.static("public"));

  // Inform Express.js on which template engine to use
  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "public")));

  app.use(routes);

  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
  });
};
main();
